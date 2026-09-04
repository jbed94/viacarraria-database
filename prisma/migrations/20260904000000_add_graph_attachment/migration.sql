-- CreateTable
CREATE TABLE IF NOT EXISTS "GraphAttachment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "graphId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GraphAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "GraphAttachment_userId_graphId_key" ON "GraphAttachment"("userId", "graphId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "GraphAttachment_userId_idx" ON "GraphAttachment"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "GraphAttachment_graphId_idx" ON "GraphAttachment"("graphId");

-- AddForeignKey
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'GraphAttachment_userId_fkey'
  ) THEN
    ALTER TABLE "GraphAttachment" ADD CONSTRAINT "GraphAttachment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;

-- AddForeignKey
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'GraphAttachment_graphId_fkey'
  ) THEN
    ALTER TABLE "GraphAttachment" ADD CONSTRAINT "GraphAttachment_graphId_fkey" FOREIGN KEY ("graphId") REFERENCES "Graph"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;
