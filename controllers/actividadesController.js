// controllers/actividadesController.js
import {
  listarActividades,
  obtenerActividadPorId,
  crearActividad,
  actualizarActividad,
  eliminarActividad
} from "../db/actividadesQuery.js";

/**
 * Obtener todas las actividades de la base de datos
 */
const listarActividadesQuery = async (req, res) => {
  try {
    const actividades = await listarActividadesQuery();
    res.json(actividades);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las actividades', error: error.message });
  }
};

/**
 * Obtener una actividad por ID
 */
const obtenerActividadPorIdQuery = async (req, res) => {
  try {
    const espacio = await obtenerActividadPorIdQuery(req.params.id);
    if (espacio.length === 0) {
      return res.status(404).json({ mensaje: 'Actividad no encontrada' });
    }
    res.json(espacio[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la actividad', error: error.message });
  }
};

/**
 * Crear una nueva actividad
 */
const crearActividadQuery = async (req, res) => {
  try {
    const datosActividad = req.body;
    const resultado = await crearActividadQuery(datosActividad);
    res.status(201).json({ mensaje: 'Actividad creada con éxito', espacio: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la actividad', error: error.message });
  }
};

/**
 * Actualizar una actividad existente
 */
const actualizarActividadQuery = async (req, res) => {
  try {
    const id = req.params.id;
    const datosActividad = req.body;
    const resultado = await actualizarActividadQuery(id, datosActividad);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Actividad no encontrada' });
    }
    res.json({ mensaje: 'Actividad actualizada con éxito', espacio: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la actividad', error: error.message });
  }
};

/**
 * Eliminar una actividad
 */
const eliminarActividadQuery = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarActividadQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Actividad no encontrada' });
    }
    res.json({ mensaje: 'Actividad eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la actividad', error: error.message });
  }
};

export {
  listarActividades,
  obtenerActividadPorId,
  crearActividad,
  actualizarActividad,
  eliminarActividad,
};