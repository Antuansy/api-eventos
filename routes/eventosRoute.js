import { Router } from 'express';

import {
    listarTodosEventos,
    listarEventoPorId,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} from '../controllers/eventosController.js';

const eventosRoute = Router();

eventosRoute.get('/', listarTodosEventos);
eventosRoute.get('/:id', listarEventoPorId);

eventosRoute.post('/', crearEvento);
eventosRoute.put('/:id', actualizarEvento);
eventosRoute.delete('/:id', eliminarEvento);

export default eventosRoute;