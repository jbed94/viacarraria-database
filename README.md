# Via Carraria Database

Prisma schema, PostgreSQL migrations, and seed entrypoint for
Via Carraria.

## Development

```bash
mamba run -n viacarraria-database pnpm install
mamba run -n viacarraria-database pnpm validate
mamba run -n viacarraria-database pnpm generate
```

The initial migration creates Better Auth users, sessions, accounts, and
verification records alongside graphs, templates, source documents, queries,
and billing events. It also includes JSONB array constraints for canvas data.
The idempotent seed creates three public system roadmaps with ready source
documents. Copy `.env.example` to `.env` before using Prisma locally.
