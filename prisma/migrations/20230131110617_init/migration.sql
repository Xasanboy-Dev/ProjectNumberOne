/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Type_Of_Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "Type_Of_Product";

-- CreateTable
CREATE TABLE "type_Of_Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT[],

    CONSTRAINT "type_Of_Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "author" INTEGER NOT NULL,
    "number" TEXT,
    "star" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
