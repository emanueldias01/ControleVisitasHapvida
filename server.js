import express from "express";
import cors from "cors";
import routes from "./src/router/Routes.js";

const app = express();
app.use(cors());
app.use(express.json());
routes(app);

app.listen(8080);