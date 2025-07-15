/*
  Warnings:

  - You are about to drop the `Visitiante` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dataEntrada` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Visitiante_cpf_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Visitiante";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Visitante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    CONSTRAINT "Visitante_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "leito" INTEGER NOT NULL,
    "dataEntrada" DATETIME NOT NULL
);
INSERT INTO "new_Paciente" ("cpf", "id", "leito", "nome") SELECT "cpf", "id", "leito", "nome" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE UNIQUE INDEX "Paciente_nome_key" ON "Paciente"("nome");
CREATE UNIQUE INDEX "Paciente_cpf_key" ON "Paciente"("cpf");
CREATE UNIQUE INDEX "Paciente_leito_key" ON "Paciente"("leito");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Visitante_cpf_key" ON "Visitante"("cpf");
