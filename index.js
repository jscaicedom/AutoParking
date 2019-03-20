'use strict'

//importando mongoose
const mongoose = require('mongoose')
const app = require('./app')

//config
const config = require('./config')


//conexion con base de datos y port
mongoose.connect(config.db, (err,res) => {
    if(err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexión a la base de datos establecida...')

    app.listen(config.port,() => {
        console.log(`API REST corriendo en htttp:://localhost:${config.port}`)
    })
})