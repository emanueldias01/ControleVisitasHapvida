/*
  Warnings:

  - You are about to drop the `Vistiante` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Vistiante";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Visitiante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    CONSTRAINT "Visitiante_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Visitiante_cpf_key" ON "Visitiante"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_cpf_key" ON "Paciente"("cpf");
