/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Paciente_nome_key" ON "Paciente"("nome");
