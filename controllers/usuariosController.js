// controllers/usuariosController.js
import {
  listarUsuariosQuery,
  obtenerUsuarioPorIdQuery,
  crearUsuarioQuery,
  actualizarUsuarioQuery,
  eliminarUsuarioQuery
} from "../db/usuariosQuery.js";

/**
 * Obtener todos los usuarios de la base de datos
 */
const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await listarUsuariosQuery();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los usuarios', error: error.message });
  }
};

/**
 * Obtener un usuario por ID
 */
const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await obtenerUsuarioPorIdQuery(req.params.id);
    if (usuario.length === 0) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el usuario', error: error.message });
  }
};

/**
 * Crear un nuevo usuario
 */
const crearUsuario = async (req, res) => {
  try {
    const datosUsuario = req.body;
    const resultado = await crearUsuarioQuery(datosUsuario);
    res.status(201).json({ mensaje: 'Usuario creado con éxito', usuario: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el usuario', error: error.message });
  }
};

/**
 * Actualizar un usuario} existente
 */
const actualizarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const datosUsuario = req.body;
    const resultado = await actualizarUsuarioQuery(id, datosUsuario);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json({ mensaje: 'Usuario actualizado con éxito', usuario: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el usuario', error: error.message });
  }
};

/**
 * Eliminar un usuario
 */
const eliminarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarUsuarioQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json({ mensaje: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
  }
};

export {
  listarUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};