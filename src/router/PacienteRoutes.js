import express from "express";
import container from "../container/DIContainer.js";

const pacienteRoutes = express.Router();
const pacienteController = container.getPacienteController();

pacienteRoutes.get("/pacientes", (req, res) => pacienteController.getAllPacientes(req, res));
pacienteRoutes.get("/pacientes/:id", (req, res) => pacienteController.getPacienteById(req, res));
pacienteRoutes.post("/pacientes", (req, res) => pacienteController.createPaciente(req, res));
pacienteRoutes.put("/pacientes/:id", (req, res) => pacienteController.updatePaciente(req, res));
pacienteRoutes.delete("/pacientes/:id", (req, res) => pacienteController.deletePacienteById(req, res));

export default pacienteRoutes;
