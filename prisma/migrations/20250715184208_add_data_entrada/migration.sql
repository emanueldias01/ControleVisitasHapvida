/*
  Warnings:

  - Added the required column `dataEntrada` to the `Visitante` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Visitante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "dataEntrada" DATETIME NOT NULL,
    CONSTRAINT "Visitante_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Visitante" ("categoria", "cpf", "id", "nome", "pacienteId") SELECT "categoria", "cpf", "id", "nome", "pacienteId" FROM "Visitante";
DROP TABLE "Visitante";
ALTER TABLE "new_Visitante" RENAME TO "Visitante";
CREATE UNIQUE INDEX "Visitante_cpf_key" ON "Visitante"("cpf");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
