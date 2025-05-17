import {
    listarTodosEventosQuery,
    listarEventoPorIdQuery,
    crearEventoQuery,
    actualizarEventoQuery,
    eliminarEventoQuery
  } from "../db/eventosQuery.js";
  
  /**
   * Obtener todos los eventos de la base de datos
   */
  const listarTodosEventos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const eventos = await listarTodosEventosQuery();
      res.json(eventos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el evento con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarEventoPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const evento = await listarEventoPorIdQuery(req.params.id);
      res.json(evento);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un evento}
   */
  const crearEvento = async (req, res) => {
    console.log(req.body)
    try {
        const datosEvento = req.body;
        const resultado = await crearEventoQuery(datosEvento);
        res.json({ mensaje: 'Evento creado con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un evento}
   */
  const actualizarEvento = async (req, res) => {
    try {
        const id = req.params.id;
        const datosEvento = req.body;
        const resultado = await actualizarEventoQuery(id, datosEvento);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Evento actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Evento no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un evento}
   */
  const eliminarEvento = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarEventoQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Evento eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Evento no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el evento', error: error.message });
    }
  };
  
  export {
    listarTodosEventos,
    listarEventoPorId,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
  };