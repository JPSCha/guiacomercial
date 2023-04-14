import express from "express";
import cors from "cors";
import { ConnectToDB } from "./src/database/conn.js";
import rotaUsuario from "./src/routes/usuario.route.js";
import rotaEmpresa from "./src/routes/empresa.route.js";
import rotaAutenticacao from "./src/routes/auth.route.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT_SERVER || 3003;
const app = express();

// Configure Express for read JSON
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/usuario", rotaUsuario);
app.use("/login", rotaAutenticacao)
app.use("/empresas", rotaEmpresa);


//Server running
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));


// Connection to Database
ConnectToDB();
