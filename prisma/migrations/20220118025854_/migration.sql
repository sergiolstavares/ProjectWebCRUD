/*
  Warnings:

  - Added the required column `cpf` to the `mechanics` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mechanics" (
    "id_mechanic" TEXT NOT NULL PRIMARY KEY,
    "cpf" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "mail" TEXT NOT NULL
);
INSERT INTO "new_mechanics" ("city", "id_mechanic", "mail", "name", "phone", "state") SELECT "city", "id_mechanic", "mail", "name", "phone", "state" FROM "mechanics";
DROP TABLE "mechanics";
ALTER TABLE "new_mechanics" RENAME TO "mechanics";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
