import {
    listarTodosUsuariosQuery,
    listarUsuarioPorIdQuery,
    crearUsuarioQuery,
    actualizarUsuarioQuery,
    eliminarUsuarioQuery
  } from "../db/usuariosQuery.js";
  
  /**
   * Obtener todos los usuarios de la base de datos
   */
  const listarTodosUsuarios = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const usuarios = await listarTodosUsuariosQuery();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el usuario con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarUsuarioPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const usuario = await listarUsuarioPorIdQuery(req.params.id);
      res.json(usuario);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un usuario
   */
  const crearUsuario = async (req, res) => {
    console.log(req.body)
    try {
        const datosUsuario = req.body;
        const resultado = await crearUsuarioQuery(datosUsuario);
        res.json({ mensaje: 'Usuario creado con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un usuario
   */
  const actualizarUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const datosUsuario = req.body;
        const resultado = await actualizarUsuarioQuery(id, datosUsuario);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Usuario actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un usuario
   */
  const eliminarUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarUsuarioQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Usuario eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
    }
  };
  
  export {
    listarTodosUsuarios,
    listarUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
  };