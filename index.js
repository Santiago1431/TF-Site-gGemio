import express from "express";
import dotenv from "dotenv";
import { selectUsuarios } from "/workspaces/TF-Site-gGemio/conectbd.js";

dotenv.config();      
const app = express();              
const port = 3000;                  

app.get("/", (req, res) => {       
  console.log("Rota Principal solicitada");
  res.sendFile( "/workspaces/TF-Site-gGemio/front/Pagina Inicial.html" );
});
app.get("/adm", (req, res) => {
    console.log (" Pagina de administrador solicitada")
    res.sendFile("/workspaces/TF-Site-gGemio/front/pagina administrador.html")
})

app.get("/membros", async (req, res) => {
    console.log("Rota membros solicitada");
    try {
      const usuarios = await selectUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });

app.listen(port, () => {           
  console.log(`Serviço escutando na porta:  ${port}`);
});