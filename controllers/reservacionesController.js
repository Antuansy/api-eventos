// controllers/reservacionesController.js
import {
  listarReservaciones,
  obtenerReservacionPorId,
  crearReservacion,
  actualizarReservacion,
  eliminarReservacion
} from "../db/reservacionesQuery.js";

/**
 * Obtener todas las reservaciones de la base de datos
 */
const listarReservacionesQuery = async (req, res) => {
  try {
    const reservaciones = await listarReservacionesQuery();
    res.json(reservaciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las reservaciones', error: error.message });
  }
};

/**
 * Obtener una reservacion por ID
 */
const obtenerReservacionPorIdQuery = async (req, res) => {
  try {
    const espacio = await obtenerReservacionPorIdQuery(req.params.id);
    if (espacio.length === 0) {
      return res.status(404).json({ mensaje: 'Reservacion no encontrada' });
    }
    res.json(espacio[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la reservacion', error: error.message });
  }
};

/**
 * Crear una nueva reservacion
 */
const crearReservacionQuery = async (req, res) => {
  try {
    const datosReservacion = req.body;
    const resultado = await crearReservacionQuery(datosReservacion);
    res.status(201).json({ mensaje: 'Reservacion creada con éxito', espacio: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la reservacion', error: error.message });
  }
};

/**
 * Actualizar una reservacion existente
 */
const actualizarReservacionQuery = async (req, res) => {
  try {
    const id = req.params.id;
    const datosReservacion = req.body;
    const resultado = await actualizarReservacionQuery(id, datosReservacion);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Reservacion no encontrada' });
    }
    res.json({ mensaje: 'Reservacion actualizada con éxito', espacio: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la reservacion', error: error.message });
  }
};

/**
 * Eliminar una reservacion
 */
const eliminarReservacionQuery = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarReservacionQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Reservacion no encontrada' });
    }
    res.json({ mensaje: 'Reservacion eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la reservacion', error: error.message });
  }
};

export {
  listarReservaciones,
  obtenerReservacionPorId,
  crearReservacion,
  actualizarReservacion,
  eliminarReservacion,
};