const {Router} = require('express');
const getPacientes = require('../controllers/pacientes.controller.js'); 

const routes = Router();
routes.get("/", getPacientes);



module.exports = routes