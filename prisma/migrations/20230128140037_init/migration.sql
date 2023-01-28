/*
  Warnings:

  - A unique constraint covering the columns `[hashed]` on the table `Ussers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hashed` to the `Ussers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ussers" ADD COLUMN     "hashed" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ussers_hashed_key" ON "Ussers"("hashed");
