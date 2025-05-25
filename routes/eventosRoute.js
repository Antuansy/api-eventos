import { Router } from 'express';

import {
  listarEventos,
  obtenerEventoPorId,
  crearEvento,
  actualizarEvento,
  eliminarEvento
} from '../controllers/eventosController.js';

const EventosRouter = Router();

EventosRouter.get('/', listarEventos);
EventosRouter.get('/:id', obtenerEventoPorId);
EventosRouter.post('/', crearEvento);
EventosRouter.put('/:id', actualizarEvento);
EventosRouter.delete('/:id', eliminarEvento);

export default EventosRouter;
