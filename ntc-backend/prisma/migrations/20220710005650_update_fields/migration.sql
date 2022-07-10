/*
  Warnings:

  - You are about to drop the column `updated_At` on the `times` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_times" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_At" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    CONSTRAINT "times_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_times" ("created_At", "id", "userId") SELECT "created_At", "id", "userId" FROM "times";
DROP TABLE "times";
ALTER TABLE "new_times" RENAME TO "times";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
