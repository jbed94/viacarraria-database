-- CreateTable
CREATE TABLE IF NOT EXISTS "GraphArchive" (
    "id" TEXT NOT NULL,
    "graphId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "archiveUrl" TEXT NOT NULL,
    "sizeBytes" INTEGER NOT NULL DEFAULT 0,
    "sourceCount" INTEGER NOT NULL DEFAULT 0,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GraphArchive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "GraphArchive_graphId_key" ON "GraphArchive"("graphId");
CREATE INDEX IF NOT EXISTS "GraphArchive_userId_idx" ON "GraphArchive"("userId");
CREATE INDEX IF NOT EXISTS "GraphArchive_expiresAt_idx" ON "GraphArchive"("expiresAt");
