import { Router } from 'express';

import {
  listarActividades,
  obtenerActividadPorId,
  crearActividad,
  actualizarActividad,
  eliminarActividad
} from '../controllers/actividadesController.js';

const ActividadesRouter = Router();

ActividadesRouter.get('/', listarActividades);
ActividadesRouter.get('/:id', obtenerActividadPorId);
ActividadesRouter.post('/', crearActividad);
ActividadesRouter.put('/:id', actualizarActividad);
ActividadesRouter.delete('/:id', eliminarActividad);

export default ActividadesRouter;
