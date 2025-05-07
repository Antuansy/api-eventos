import {
    listarTodosEspaciosQuery,
    listarEspacioPorIdQuery,
    crearEspacioQuery,
    actualizarEspacioQuery,
    eliminarEspacioQuery
  } from "../db/espaciosQuery.js";
  
  /**
   * Obtener todos los espacios de la base de datos
   */
  const listarTodosEspacios = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const espacios = await listarTodosEspaciosQuery();
      res.json(espacios);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el espacio con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarEspacioPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const espacio = await listarEspacioPorIdQuery(req.params.id);
      res.json(espacio);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un espacio
   */
  const crearEspacio = async (req, res) => {
    console.log(req.body)
    try {
        const datosEspacio = req.body;
        const resultado = await crearEspacioQuery(datosEspacio);
        res.json({ mensaje: 'Espacio creado con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un espacio
   */
  const actualizarEspacio = async (req, res) => {
    try {
        const id = req.params.id;
        const datosEspacio = req.body;
        const resultado = await actualizarEspacioQuery(id, datosEspacio);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Espacio actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Espacio no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un espacio
   */
  const eliminarEspacio = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarEspacioQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Espacio eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Espacio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el espacio', error: error.message });
    }
  };
  
  export {
    listarTodosEspacios,
    listarEspacioPorId,
    crearEspacio,
    actualizarEspacio,
    eliminarEspacio,
  };