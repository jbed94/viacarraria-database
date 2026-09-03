# Via Carraria — Database Sub-Repository Specification (`viacarraria-database`)

This sub-repository manages PostgreSQL database migrations, Prisma ORM schema definitions, seed data for pre-baked knowledge graph templates, and Directus database-first admin panel configurations.

---

## Technical Stack & Architectural Pattern

- **Database Engine**: PostgreSQL 16+
- **ORM & Migrations**: Prisma ORM
- **Admin Panel Platform**: Directus (Database-First Headless CMS & Admin UI)
- **Data Pattern**: Hybrid Relational + Document Model (`JSONB` for canvas nodes & edges)

---

## Submodule Architecture & Environment Management

- **Environment Definition (`environment.yml`)**: Mamba environment `viacarraria-database` containing minimal platform tools ONLY (`nodejs`, `pnpm`).
- **Dependency Installation**: `mamba run -n viacarraria-database pnpm install`
- **Submodule Directory Standard**:
  - `platforms/docker/`: Dockerfile definitions for container wrapping and platform serving.
  - Docker Compose and Helm descriptors are owned exclusively by `viacarraria-infrastructure`.

---

## Schema Architecture (`prisma/schema.prisma`)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum SourceStatus {
  PENDING
  PROCESSING
  READY
  ERROR
}

model User {
  id                    String           @id
  name                  String
  email                 String           @unique
  emailVerified         Boolean          @default(false)
  image                 String?
  isAnonymous           Boolean          @default(false)
  username              String?
  subscriptionTier      String           @default("FREE")
  lemonSqueezyCustomerId String?          @unique
  subscriptionExpiresAt DateTime?
  preferredLanguage     String           @default("en")
  createdAt             DateTime         @default(now())
  updatedAt             DateTime         @updatedAt

  sessions  Session[]
  accounts  Account[]
  graphs    Graph[]
  queries   Query[]
  billingEvents BillingEvent[]
}

model Session {
  expiresAt DateTime
  token     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?
  userAgent String?
  userId    String

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Account {
  id                    String   @id
  issuer                String
  accountId             String
  providerId            String
  userId                String
  user                  User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt

  @@unique([issuer, accountId])
}

model Verification {
  id         String   @id
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

model Graph {
  id          String   @id @default(uuid())
  title       String
  description String?
  userId      String
  isPublic    Boolean  @default(false)
  isPrepared  Boolean  @default(false)
  nodes       Json     // JSONB array of React Flow nodes
  edges       Json     // JSONB array of React Flow edges
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  user    User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  sources NodeSource[]
}

model GraphTemplate {
  id          String   @id @default(uuid())
  title       String
  description String?
  category    String
  nodes       Json     // JSONB canvas template
  edges       Json     // JSONB canvas template
  createdAt   DateTime @default(now())
}

model NodeSource {
  id        String       @id @default(uuid())
  nodeId    String       // Associated node ID inside graph's nodes JSONB
  graphId   String
  name      String
  fileType  String
  fileUrl   String
  fileHash  String       // SHA-256 digest for deduplication
  status    SourceStatus @default(PENDING)
  createdAt DateTime     @default(now())

  graph Graph @relation(fields: [graphId], references: [id], onDelete: Cascade)
}
```

---

## Database Constraints & Data Integrity

To prevent invalid JSON payloads from corrupting canvas rendering in React Flow, raw SQL migrations append PostgreSQL check constraints:

```sql
ALTER TABLE "Graph" 
ADD CONSTRAINT check_nodes_is_array 
CHECK (jsonb_typeof(nodes) = 'array');

ALTER TABLE "Graph" 
ADD CONSTRAINT check_edges_is_array 
CHECK (jsonb_typeof(edges) = 'array');
```

---

## Directus Database-First Admin Integration

Directus connects directly to PostgreSQL (`docker-compose.infra.yaml`) without requiring custom admin backend code:

1. **JSONB Editor**: Directus renders syntax-highlighted JSON editors for `Graph.nodes` and `Graph.edges`, enabling direct admin inspection and manual graph edits.
2. **User & RBAC Management**: Admins can adjust user subscription tiers (`FREE` -> `PRO`), reset passwords, inspect active sessions, and grant edit permissions.
3. **Template Management**: Official system graphs (e.g., *Computer Science Skill Tree*, *English Learning Roadmap*, *Medical Foundations*) are curated via `GraphTemplate` entries in Directus and assigned to system user `jbed94`.

---

## Database Operational Commands

- **Apply Migrations**: `npx prisma migrate dev`
- **Generate Client**: `npx prisma generate`
- **Seed Data**: `npx prisma db seed`
