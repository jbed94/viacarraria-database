# Via Carraria — Database Specification (`viacarraria-database`)

Database management: PostgreSQL schema migrations, Prisma ORM definitions, relational integrity, and seed data for knowledge graph templates.

---

## Tech Stack & Data Architecture

- **Database Engine**: PostgreSQL 16+
- **ORM & Migrations**: Prisma ORM
- **Storage Model**: Hybrid Relational + Document Model (Relational metadata with PostgreSQL `JSONB` for flexible canvas nodes and edges)
- **Administration**: Decoupled Admin Panel (`viacarraria-frontend/dist-admin`) connecting via backend administrative API

---

## Environment & Directory Rules

- **Env (`environment.yml`)**: Mamba env `viacarraria-database`. Tools: `nodejs`, `pnpm` only.
- **Install**: `mamba run -n viacarraria-database pnpm install`
- **Packaging**: `platforms/docker/` contains Dockerfile. Compose and Helm files reside in `viacarraria-infrastructure`.

---

## Implemented Data Models & System Entities

The database layer models user identity, canvas graphs, document sources, billing, credit transactions, and ad telemetry:

1. **User Identity & Authentication**:
   - **User**: Core profile containing email, username, verification flags, subscription tier (`FREE`, `PRO`), credit balances, customer IDs for payment gateways, and language preferences.
   - **Session**: User login sessions storing authentication tokens, client IP addresses, user agents, and expiration timestamps.
   - **Account**: Third-party OAuth providers (Google, GitHub) and local credential mappings.
   - **Verification**: Email and password verification tokens.

2. **Knowledge Graphs & Sources**:
   - **Graph**: Canvas graph entities storing metadata, owner relations, visibility (`isPublic`), and serialized React Flow structures (`nodes` and `edges` in JSONB).
   - **GraphTemplate**: Curated system graph roadmaps (*Computer Science*, *English Learning*, *Medicine*) readable by all users.
   - **GraphAttachment**: File and binary attachments associated with knowledge graphs.
   - **NodeSource**: Primary source documents (PDF, Markdown, TXT) linked to specific graph nodes. Tracks storage URLs, SHA-256 content hashes for deduplication, and ingestion lifecycle states (`PENDING`, `PROCESSING`, `READY`, `ERROR`).

3. **Search History & Usage Credits**:
   - **Query**: Historical Spatial GraphRAG queries, recording timestamps, target graphs, and query terms.
   - **CreditTransaction**: Ledger tracking credit additions (top-ups, bonuses) and deductions (query consumption, file uploads).

4. **Monetization & Subscriptions**:
   - **PlanDefinition**: Dynamic subscription plan configuration specifying tier identifiers, monthly query quotas, max node counts, source upload allowances, and credit rates.
   - **BillingEvent**: Audit trail of payment webhook events received from Stripe and LemonSqueezy.

5. **Ad Telemetry & Rollup Aggregation**:
   - **AdTelemetryEvent**: High-frequency telemetry logging ad impressions, clicks, and dismissals with provider tags and timestamps.
   - **AdTelemetryDailyRollup**: Aggregated daily summaries calculating total impressions, clicks, dismissals, and CTR per day, enabling safe pruning of raw events.

6. **System Governance & Archival**:
   - **Notification**: In-app user notifications with read status and delivery tracking.
   - **GraphArchive**: Cold storage metadata tracking archived graphs exported to compressed S3 object storage.

---

## Data Constraints & Integrity Enforcement

- **JSON Array Constraints**: Raw SQL migrations enforce PostgreSQL check constraints ensuring `nodes` and `edges` JSONB columns always contain valid JSON arrays, preventing malformed payloads from breaking React Flow rendering.
- **Deduplication Constraints**: Unique index on source file SHA-256 hashes prevents re-processing identical source documents across nodes.
- **Referential Integrity**: Cascading deletes ensure child sources, sessions, and queries are cleaned up when graphs or user accounts are removed.

---

## Operational Commands

- `npx prisma migrate dev` (Apply database migrations)
- `pnpm db:push` or `npx prisma db push --accept-data-loss` (Synchronize database schema directly)
- `npx prisma generate` (Regenerate Prisma client)
- `npx prisma db seed` (Seed system templates and initial plan definitions)
