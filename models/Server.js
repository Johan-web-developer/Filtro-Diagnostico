const express = require('express');
const cors = require('cors');
const {conecction} = require('../database/config.js');

class Server {
    constructor() {
        this.app = express();
        this.middleware();
        this.port = process.env.PORT
        this.medicamentos = "/api/medicamentos";
        this.proveedores = "/api/proveedores";  
        this.empleados = "/api/empleados";
        this.pacientes = "/api/pacientes";
        this.compras = "/api/compras"


        this.conectDB();

        this.routes();
    }
    async conectDB(){
        await conecction()
    }
    middleware() {
        //CORS 
        this.app.use(cors());
        //Leer y parsear JSON en BODY//
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.medicamentos, require('../routes/medicamentos.routes.js'));
        this.app.use(this.proveedores, require('../routes/proveedores.routes.js'));
        this.app.use(this.empleados, require('../routes/empleados.routes.js'));
        this.app.use(this.pacientes, require('../routes/pacientes.routes.js'));
        this.app.use(this.compras, require('../routes/compras.routes.js'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
                        console.log(`Server is running on port : ${this.port}`);
                    })
    }
}




module.exports = Server;