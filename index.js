// index.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importa solo las rutas relevantes a tu proyecto
import ActividadesRouter from './routes/actividadesRoute.js';
import EspaciosRouter from './routes/espaciosRoute.js';
import EventosRouter from './routes/eventosRoute.js';
import ReservacionesRouter from './routes/reservacionesRoute.js';
import UsuariosRouter from './routes/usuariosRoute.js'; 

// Usa solo las rutas necesarias para tu proyecto
app.use('/api/actividades', ActividadesRouter);
app.use('/api/espacios', EspaciosRouter);
app.use('/api/eventos', EventosRouter);
app.use('/api/reservaciones', ReservacionesRouter);
app.use('/api/usuarios', UsuariosRouter)

// Ruta base
app.get('/', (req, res) => {
    res.send('Bienvenido a la API del sistema de reservación de Eventos');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});