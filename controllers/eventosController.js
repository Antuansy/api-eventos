// controllers/eventosController.js
import {
  listarEventos,
  obtenerEventoPorId,
  crearEvento,
  actualizarEvento,
  eliminarEvento
} from "../db/eventosQuery.js";

/**
 * Obtener todos los eventos de la base de datos
 */
const listarEventosQuery = async (req, res) => {
  try {
    const eventos = await listarEventosQuery();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los eventos', error: error.message });
  }
};

/**
 * Obtener un evento por ID
 */
const obtenerEventoPorIdQuery = async (req, res) => {
  try {
    const evento = await obtenerEventoPorIdQuery(req.params.id);
    if (evento.length === 0) {
      return res.status(404).json({ mensaje: 'Evento no encontrado' });
    }
    res.json(evento[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el evento', error: error.message });
  }
};

/**
 * Crear un nuevo evento
 */
const crearEventoQuery = async (req, res) => {
  try {
    const datosEvento = req.body;
    const resultado = await crearEventoQuery(datosEvento);
    res.status(201).json({ mensaje: 'Evento creado con éxito', evento: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el evento', error: error.message });
  }
};

/**
 * Actualizar un evento} existente
 */
const actualizarEventoQuery = async (req, res) => {
  try {
    const id = req.params.id;
    const datosEvento = req.body;
    const resultado = await actualizarEventoQuery(id, datosEvento);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Evento no encontrado' });
    }
    res.json({ mensaje: 'Evento actualizado con éxito', evento: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el evento', error: error.message });
  }
};

/**
 * Eliminar un evento
 */
const eliminarEventoQuery = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarEventoQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Evento no encontrado' });
    }
    res.json({ mensaje: 'Evento eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el evento', error: error.message });
  }
};

export {
  listarEventos,
  obtenerEventoPorId,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};