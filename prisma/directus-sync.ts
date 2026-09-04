import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type FieldMetaConfig = {
  interface?: string;
  options?: Record<string, unknown>;
  width?: 'full' | 'half';
  readonly?: boolean;
};

type CollectionConfig = {
  collection: string;
  icon: string;
  note: string;
  displayTemplate?: string;
  fields?: Record<string, FieldMetaConfig>;
};

const collectionsToSync: CollectionConfig[] = [
  {
    collection: 'Graph',
    icon: 'account_tree',
    note: 'Knowledge graphs containing subject nodes and curriculum edges',
    displayTemplate: '{{title}}',
    fields: {
      nodes: {
        interface: 'input-code',
        options: { language: 'json' },
        width: 'full',
      },
      edges: {
        interface: 'input-code',
        options: { language: 'json' },
        width: 'full',
      },
      isPublic: {
        interface: 'boolean',
        width: 'half',
      },
      isPrepared: {
        interface: 'boolean',
        width: 'half',
      },
    },
  },
  {
    collection: 'GraphTemplate',
    icon: 'auto_awesome',
    note: 'Curated public domain and university curriculum templates',
    displayTemplate: '{{title}}',
    fields: {
      nodes: {
        interface: 'input-code',
        options: { language: 'json' },
        width: 'full',
      },
      edges: {
        interface: 'input-code',
        options: { language: 'json' },
        width: 'full',
      },
    },
  },
  {
    collection: 'NodeSource',
    icon: 'description',
    note: 'Source markdown documents attached to individual graph nodes',
    displayTemplate: '{{name}}',
    fields: {
      content: {
        interface: 'input-code',
        options: { language: 'markdown' },
        width: 'full',
      },
      status: {
        interface: 'select-dropdown',
        options: {
          choices: [
            { text: 'Pending', value: 'PENDING' },
            { text: 'Processing', value: 'PROCESSING' },
            { text: 'Ready', value: 'READY' },
            { text: 'Error', value: 'ERROR' },
          ],
        },
        width: 'half',
      },
    },
  },
  {
    collection: 'User',
    icon: 'person',
    note: 'Registered and anonymous Via Carraria user accounts',
    displayTemplate: '{{name}} ({{email}})',
    fields: {
      subscriptionTier: {
        interface: 'select-dropdown',
        options: {
          choices: [
            { text: 'FREE', value: 'FREE' },
            { text: 'PRO', value: 'PRO' },
            { text: 'ANONYMOUS', value: 'ANONYMOUS' },
          ],
        },
        width: 'half',
      },
      isAnonymous: {
        interface: 'boolean',
        width: 'half',
      },
      emailVerified: {
        interface: 'boolean',
        width: 'half',
      },
    },
  },
  {
    collection: 'Query',
    icon: 'search',
    note: 'Search queries and structured chunk retrieval history',
    displayTemplate: '{{queryText}}',
    fields: {
      selectedNodeIds: {
        interface: 'input-code',
        options: { language: 'json' },
        width: 'half',
      },
      results: {
        interface: 'input-code',
        options: { language: 'json' },
        width: 'full',
      },
    },
  },
  {
    collection: 'Session',
    icon: 'login',
    note: 'Better Auth active authentication sessions',
    displayTemplate: '{{userId}} ({{id}})',
  },
  {
    collection: 'Account',
    icon: 'key',
    note: 'Better Auth user credentials and OAuth provider links',
    displayTemplate: '{{providerId}} - {{accountId}}',
  },
  {
    collection: 'BillingEvent',
    icon: 'receipt_long',
    note: 'Lemon Squeezy webhooks and billing lifecycle audit trail',
    displayTemplate: '{{eventType}}',
    fields: {
      payload: {
        interface: 'input-code',
        options: { language: 'json' },
        width: 'full',
      },
    },
  },
  {
    collection: 'Verification',
    icon: 'verified',
    note: 'Email verification and password reset tokens',
    displayTemplate: '{{identifier}}',
  },
];

export async function syncDirectus(
  directusUrl = process.env.DIRECTUS_URL ?? 'http://127.0.0.1:8055',
  email = process.env.DIRECTUS_ADMIN_EMAIL ?? 'admin@example.com',
  password = process.env.DIRECTUS_ADMIN_PASSWORD ??
    'replace-with-a-local-development-password',
): Promise<boolean> {
  const normalizedUrl = directusUrl.replace(/\/+$/, '');

  try {
    const loginRes = await fetch(`${normalizedUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      signal: AbortSignal.timeout(3000),
    });

    if (!loginRes.ok) {
      console.warn(
        `[Directus Sync] Failed to authenticate with Directus at ${normalizedUrl} (${loginRes.status}). Skipping metadata sync.`,
      );
      return false;
    }

    const loginData = (await loginRes.json()) as {
      data: { access_token: string };
    };
    const token = loginData.data.access_token;
    const authHeaders = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    console.log(`[Directus Sync] Connected to Directus at ${normalizedUrl}`);

    for (const conf of collectionsToSync) {
      const collectionRes = await fetch(
        `${normalizedUrl}/collections/${conf.collection}`,
        {
          method: 'PATCH',
          headers: authHeaders,
          body: JSON.stringify({
            meta: {
              icon: conf.icon,
              note: conf.note,
              display_template: conf.displayTemplate ?? null,
              hidden: false,
            },
          }),
        },
      );

      if (!collectionRes.ok) {
        console.warn(
          `[Directus Sync] Could not track collection ${conf.collection}: ${collectionRes.statusText}`,
        );
        continue;
      }

      console.log(`[Directus Sync] Tracked collection: ${conf.collection}`);

      if (conf.fields) {
        for (const [fieldName, fieldMeta] of Object.entries(conf.fields)) {
          const fieldRes = await fetch(
            `${normalizedUrl}/fields/${conf.collection}/${fieldName}`,
            {
              method: 'PATCH',
              headers: authHeaders,
              body: JSON.stringify({
                meta: {
                  interface: fieldMeta.interface,
                  options: fieldMeta.options ?? null,
                  width: fieldMeta.width ?? 'full',
                  readonly: fieldMeta.readonly ?? false,
                },
              }),
            },
          );

          if (!fieldRes.ok) {
            console.warn(
              `[Directus Sync] Could not configure field ${conf.collection}.${fieldName}: ${fieldRes.statusText}`,
            );
          }
        }
      }
    }

    // Clear system cache so Directus UI immediately reflects tracked collections
    await fetch(`${normalizedUrl}/utils/cache/clear`, {
      method: 'POST',
      headers: authHeaders,
    });
    console.log('[Directus Sync] Directus cache purged.');

    // Save snapshot to directus/snapshots/snapshot.json
    try {
      const snapshotRes = await fetch(`${normalizedUrl}/schema/snapshot`, {
        headers: authHeaders,
      });
      if (snapshotRes.ok) {
        const snapshotData = await snapshotRes.json();
        const snapshotsDir = join(__dirname, '..', 'directus', 'snapshots');
        mkdirSync(snapshotsDir, { recursive: true });
        writeFileSync(
          join(snapshotsDir, 'snapshot.json'),
          JSON.stringify(snapshotData, null, 2),
          'utf8',
        );
        console.log(
          `[Directus Sync] Schema snapshot saved to directus/snapshots/snapshot.json`,
        );
      }
    } catch (snapshotErr) {
      console.warn('[Directus Sync] Could not export snapshot:', snapshotErr);
    }

    return true;
  } catch (err: unknown) {
    console.warn(
      `[Directus Sync] Directus service unreachable at ${normalizedUrl}. Skipping metadata sync.`,
    );
    return false;
  }
}

// Execute standalone if run directly via tsx prisma/directus-sync.ts
if (process.argv[1] && process.argv[1].endsWith('directus-sync.ts')) {
  syncDirectus()
    .then((success) => {
      if (success) {
        console.log('[Directus Sync] Synchronization completed successfully.');
      } else {
        process.exit(1);
      }
    })
    .catch((err) => {
      console.error('[Directus Sync] Fatal error during sync:', err);
      process.exit(1);
    });
}
