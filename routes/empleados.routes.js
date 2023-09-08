const {Router} = require('express');
const getEmpleados = require('../controllers/empleados.controller.js'); 

const routes = Router();
routes.get("/", getEmpleados);



module.exports = routes