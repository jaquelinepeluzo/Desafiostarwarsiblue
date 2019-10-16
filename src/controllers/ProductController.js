const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const axios = require('axios');

module.exports = {
// listagem

    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },
// rota de detalhe, retornar um unico produto ID

    async show(req, res) {
        const product = await Product.findById(req.params.id);
       
        return res.json(product);
    },
// remover

    async destroy(req, res) {
        const deletar = await Product.findByIdAndDelete(req.body._id);
        
        return res.json(deletar);
    },
// buscar por nome

    async search(req, res) {
        const {name} = req.body
        const buscar = await Product.find(name).limit(1)
        
        return res.json(buscar);
    },
// axios

    async daAPI(req, res) {
        const {nam} = req.params
        const api = await axios.get(`https://swapi.co/api/planets/${nam}`)
        
        const {name, planet, climate, terrain, films} = api.data

        const result= Product.create({
            name,
            planet,
            climate,
            terrain,
            films
        })
        return res.json(result)
    },
// criar planeta manualmente

    async manualmente(req, res) {
        const {name, planet, climate, terrain, films} = req.body
        console.log(req.body)

        const result= Product.create({
            name,
            planet,
            climate,
            terrain,
            films
        })
        return res.json(result)
    },
    //async daAPI(req, res) {
        //const {planeta} = req.body
        //const api = await axios.get(`https://swapi.co/api/planets/${planeta}`)

       // console.log(api)
        //return res.json(api.data)
    //}
    
};

