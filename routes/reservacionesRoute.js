import { Router } from 'express';

import {
    listarTodasReservaciones,
    listarReservacionPorId,
    crearReservacion,
    actualizarReservacion,
    eliminarReservacion
} from '../controllers/reservacionesController.js';

const reservacionesRoute = Router();

reservacionesRoute.get('/', listarTodasReservaciones);
reservacionesRoute.get('/:id', listarReservacionPorId);

reservacionesRoute.post('/', crearReservacion);
reservacionesRoute.put('/:id', actualizarReservacion);
reservacionesRoute.delete('/:id', eliminarReservacion);

export default reservacionesRoute;