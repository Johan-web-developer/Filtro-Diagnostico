const {Router} = require('express');
const getMedicamentos = require('../controllers/medicamentos.controller.js'); 

const routes = Router();
routes.get("/", getMedicamentos);



module.exports = routes