const {Router} = require('express');
const getProveedores = require('../controllers/proveedores.controller.js'); 

const routes = Router();
routes.get("/", getProveedores);


module.exports = routes 
