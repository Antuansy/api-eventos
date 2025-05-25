import { Router } from 'express';

import {
  listarReservaciones,
  obtenerReservacionPorId,
  crearReservacion,
  actualizarReservacion,
  eliminarReservacion
} from '../controllers/reservacionesController.js';

const ReservacionesRouter = Router();

ReservacionesRouter.get('/', listarReservaciones);
ReservacionesRouter.get('/:id', obtenerReservacionPorId);
ReservacionesRouter.post('/', crearReservacion);
ReservacionesRouter.put('/:id', actualizarReservacion);
ReservacionesRouter.delete('/:id', eliminarReservacion);

export default ReservacionesRouter;
