FROM node:22-alpine
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY prisma ./prisma
RUN DATABASE_URL=postgresql://postgres:postgres@localhost:5432/viacarraria pnpm generate
CMD ["sh", "-c", "pnpm migrate:deploy && pnpm seed"]