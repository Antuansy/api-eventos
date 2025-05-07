import { Router } from 'express';

import {
    listarTodosEspacios,
    listarEspacioPorId,
    crearEspacio,
    actualizarEspacio,
    eliminarEspacio
} from '../controllers/espaciosController.js';

const espaciosRoute = Router();

espaciosRoute.get('/', listarTodosEspacios);
espaciosRoute.get('/:id', listarEspacioPorId);

espaciosRoute.post('/', crearEspacio);
espaciosRoute.put('/:id', actualizarEspacio);
espaciosRoute.delete('/:id', eliminarEspacio);

export default espaciosRoute;