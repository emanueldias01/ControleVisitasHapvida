/*
  Warnings:

  - A unique constraint covering the columns `[leito]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Paciente_leito_key" ON "Paciente"("leito");
