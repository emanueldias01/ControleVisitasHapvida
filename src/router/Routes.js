import pacienteRoutes from "./PacienteRoutes.js";
import visitanteRoutes from "./VisitanteRoutes.js";

const routes = (app) => {
    app.use(pacienteRoutes);
    app.use(visitanteRoutes);
}

export default routes;