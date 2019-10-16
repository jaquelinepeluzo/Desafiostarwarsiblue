const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index); // mostra todos os planetas
// products funcionando
routes.get("/products/:id", ProductController.show); // rota de detalhe, retornar um unico produto ID
// products/id funcionando
routes.post("/products/remove", ProductController.destroy); // deleta por id
// products/remove funcionando
routes.post("/products/buscar", ProductController.search); // busca limitada para 1
//busca por nome CORRIGIDO
routes.get("/products/planetas/pl/:nam", ProductController.daAPI); // criando planeta pela swapi
//adiciona mas não busca resultado CORRIGIDO
routes.post("/products/planetas", ProductController.manualmente); // criando planeta manualmente
//
module.exports = routes;
