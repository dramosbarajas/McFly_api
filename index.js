'use strict'

//Requiero mongoose para conexion de la BD
const moongose = require('mongoose')

//Requiero app para la configuración de la APP (requires, app.use, ...)
const app = require('./app')

//Requiero el fichero de configuracion de BD y puerto del servidor. 
const config = require('./config')

//Cadena de conexion BD
moongose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la BD: ${err}`)
    }
    console.log('Conexión a la base de datos')
    app.listen(config.port, () => {
        console.log(`Escuchando en el puerto ${config.port}`);    
    })
})
