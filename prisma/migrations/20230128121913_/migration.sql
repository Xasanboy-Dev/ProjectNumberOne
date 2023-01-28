/*
  Warnings:

  - Added the required column `password` to the `Ussers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ussers" ADD COLUMN     "password" TEXT NOT NULL;
