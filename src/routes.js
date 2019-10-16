const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index); // mostra todos os planetas
routes.get('/products/:id', ProductController.show);  // rota de detalhe, retornar um unico produto ID
routes.post('/products/remove', ProductController.destroy); // deleta por id
routes.post('/products/buscar', ProductController.search); // busca limitada para 1 
routes.get('/products/planetas/pl/:nam', ProductController.daAPI); // criando planeta pela swapi
routes.post('/products/planetas', ProductController.manualmente); // criando planeta manualmente

module.exports = routes;