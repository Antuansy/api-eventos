import { Router } from 'express';

import {
  listarUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
} from '../controllers/usuariosController.js';

const UsuariosRouter = Router();

UsuariosRouter.get('/', listarUsuarios);
UsuariosRouter.get('/:id', obtenerUsuarioPorId);
UsuariosRouter.post('/api/', crearUsuario);
UsuariosRouter.put('/:id', actualizarUsuario);
UsuariosRouter.delete('/:id', eliminarUsuario);

export default UsuariosRouter;
