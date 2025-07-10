import express from "express";
import VisitanteController from "../controller/visitante/VisitanteController.js";

const visitanteRoutes = express.Router();

visitanteRoutes.get("/visitantes/byPaciente/:id", VisitanteController.getAllVisitantesByPacienteId);
visitanteRoutes.get("/visitantes/:id", VisitanteController.getVisitanteById);
visitanteRoutes.post("/visitantes", VisitanteController.createVisitante);
visitanteRoutes.put("/visitantes/:id", VisitanteController.updateVisitante);
visitanteRoutes.delete("/visitantes/:id", VisitanteController.deletePacienteById);

export default visitanteRoutes;