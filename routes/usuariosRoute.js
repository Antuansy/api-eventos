import { Router } from 'express';

import {
    listarTodosUsuarios,
    listarUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from '../controllers/usuariosController.js';

const usuariosRoute = Router();

usuariosRoute.get('/', listarTodosUsuarios);
usuariosRoute.get('/:id', listarUsuarioPorId);

usuariosRoute.post('/', crearUsuario);
usuariosRoute.put('/:id', actualizarUsuario);
usuariosRoute.delete('/:id', eliminarUsuario);

export default usuariosRoute;