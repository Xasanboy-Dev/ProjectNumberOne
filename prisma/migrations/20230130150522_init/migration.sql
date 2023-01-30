-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT[],

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductName" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "author" INTEGER NOT NULL,
    "number" TEXT,
    "star" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "ProductName_pkey" PRIMARY KEY ("id")
);
