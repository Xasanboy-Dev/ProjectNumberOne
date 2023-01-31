/*
  Warnings:

  - You are about to drop the `ProductName` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProductName";

-- CreateTable
CREATE TABLE "Type_Of_Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "author" INTEGER NOT NULL,
    "number" TEXT,
    "star" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "Type_Of_Product_pkey" PRIMARY KEY ("id")
);
