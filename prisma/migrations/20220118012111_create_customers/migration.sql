-- CreateTable
CREATE TABLE "customers" (
    "id_customer" TEXT NOT NULL PRIMARY KEY,
    "cpf" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "mail" TEXT NOT NULL
);
