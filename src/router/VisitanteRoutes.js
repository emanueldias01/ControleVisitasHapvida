import express from "express";
import VisitanteController from "../controller/visitante/VisitanteController.js";

const pacienteRoutes = express.Router();

pacienteRoutes.get("/visitantes/byPaciente/:id", VisitanteController.getAllVisitantesByPacienteId);
pacienteRoutes.get("/visitantes/:id", VisitanteController.getVisitanteById);
pacienteRoutes.post("/visitantes", VisitanteController.createVisitante);
pacienteRoutes.put("/visitantes/:id");
pacienteRoutes.delete("/visitantes/:id", VisitanteController.de)