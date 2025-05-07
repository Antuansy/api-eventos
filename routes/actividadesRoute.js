import { Router } from 'express';

import {
    listarTodasActividades,
    listarActividadPorId,
    crearActividad,
    actualizarActividad,
    eliminarActividad
} from '../controllers/actividadesController.js';

const actividadesRoute = Router();

actividadesRoute.get('/', listarTodasActividades);
actividadesRoute.get('/:id', listarActividadPorId);

actividadesRoute.post('/', crearActividad);
actividadesRoute.put('/:id', actualizarActividad);
actividadesRoute.delete('/:id', eliminarActividad);

export default actividadesRoute;