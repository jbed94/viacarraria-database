FROM node:22-alpine
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate
ENV COREPACK_HOME=/tmp/corepack
ENV HOME=/tmp
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY prisma ./prisma
COPY prisma.config.ts ./
RUN DATABASE_URL=postgresql://postgres:postgres@localhost:5432/viacarraria pnpm generate
CMD ["sh", "-c", "pnpm migrate:deploy && pnpm seed"]