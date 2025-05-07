import {
    listarTodasReservacionesQuery,
    listarReservacionPorIdQuery,
    crearReservacionQuery,
    actualizarReservacionQuery,
    eliminarReservacionQuery
  } from "../db/reservacionesQuery.js";
  
  /**
   * Obtener todos las reservaciones de la base de datos
   */
  const listarTodasReservaciones = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const reservaciones = await listarTodasReservacionesQuery();
      res.json(reservaciones);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener la reservacion con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarReservacionPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const reservacion = await listarReservacionPorIdQuery(req.params.id);
      res.json(reservacion);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un reservacion
   */
  const crearReservacion = async (req, res) => {
    console.log(req.body)
    try {
        const datosReservacion = req.body;
        const resultado = await crearReservacionQuery(datosReservacion);
        res.json({ mensaje: 'Reservacion creada con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de una reservacion
   */
  const actualizarReservacion = async (req, res) => {
    try {
        const id = req.params.id;
        const datosReservacion = req.body;
        const resultado = await actualizarReservacionQuery(id, datosReservacion);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Reservacion actualizada con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Reservacion no encontrada' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar una reservacion
   */
  const eliminarReservacion = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarReservacionQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Reservacion eliminada con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Reservacion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la reservacion', error: error.message });
    }
  };
  
  export {
    listarTodasReservaciones,
    listarReservacionPorId,
    crearReservacion,
    actualizarReservacion,
    eliminarReservacion,
  };