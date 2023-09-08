const {Router} = require('express');
const getCompras = require('../controllers/compras.controller.js'); 

const routes = Router();
routes.get("/", getCompras);



module.exports = routes