import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

// Importar las rutas de los eventos
import eventosRoute from './routes/eventosRoute.js';
// Importar las rutas de los usuarios
import usuariosRoute from './routes/usuariosRoute.js';
// Importar las rutas de los espacios
import espaciosRoute from './routes/espaciosRoute.js';
// Importar las rutas de las reservaciones
import reservacionesRoute from './routes/reservacionesRoute.js';
// Importar las rutas de las actividades
import actividadesRoute from './routes/actividadesRoute.js';

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Usar las rutas
app.use('/eventos', eventosRoute); // EVENTOS
app.use('/usuarios', usuariosRoute); // USUARIOS
app.use('/espacios', espaciosRoute); // ESPACIOS
app.use('/reservaciones', reservacionesRoute); // RESERVACIONES
app.use('/actividades', actividadesRoute); // ACTIVIDADES

const port =
    process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})