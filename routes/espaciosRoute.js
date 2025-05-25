import { Router } from 'express';

import {
  listarEspacios,
  obtenerEspacioPorId,
  crearEspacio,
  actualizarEspacio,
  eliminarEspacio
} from '../controllers/espaciosController.js';

const EspaciosRouter = Router();

EspaciosRouter.get('/', listarEspacios);
EspaciosRouter.get('/:id', obtenerEspacioPorId);
EspaciosRouter.post('/', crearEspacio);
EspaciosRouter.put('/:id', actualizarEspacio);
EspaciosRouter.delete('/:id', eliminarEspacio);

export default EspaciosRouter;
