-- AlterTable
ALTER TABLE "Graph" ADD COLUMN IF NOT EXISTS "lastAccessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Graph" ADD COLUMN IF NOT EXISTS "scheduledForDeletionAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Graph_lastAccessedAt_idx" ON "Graph"("lastAccessedAt");
CREATE INDEX IF NOT EXISTS "Graph_scheduledForDeletionAt_idx" ON "Graph"("scheduledForDeletionAt");
