import express from "express";
import PacienteController from "../controller/paciente/PacienteController.js";

const pacienteRoutes = express.Router();

pacienteRoutes.get("/pacientes", PacienteController.getAllPacientes);
pacienteRoutes.get("/pacientes/:id", PacienteController.getPacienteById);
pacienteRoutes.post("/pacientes", PacienteController.createPaciente);
pacienteRoutes.put("/pacientes/:id", PacienteController.updatePaciente);
pacienteRoutes.delete("/pacientes/:id", PacienteController.deletePacienteById);

export default pacienteRoutes;