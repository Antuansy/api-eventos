// controllers/espaciosController.js
import {
  listarEspacios,
  obtenerEspacioPorId,
  crearEspacio,
  actualizarEspacio,
  eliminarEspacio
} from "../db/espaciosQuery.js";

/**
 * Obtener todos los espacios de la base de datos
 */
const listarEspaciosQuery = async (req, res) => {
  try {
    const espacios = await listarEspaciosQuery();
    res.json(espacios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los espacios', error: error.message });
  }
};

/**
 * Obtener un espacio por ID
 */
const obtenerEspacioPorIdQuery = async (req, res) => {
  try {
    const espacio = await obtenerEspacioPorIdQuery(req.params.id);
    if (espacio.length === 0) {
      return res.status(404).json({ mensaje: 'Espacio no encontrado' });
    }
    res.json(espacio[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el espacio', error: error.message });
  }
};

/**
 * Crear un nuevo espacio
 */
const crearEspacioQuery = async (req, res) => {
  try {
    const datosEspacio = req.body;
    const resultado = await crearEspacioQuery(datosEspacio);
    res.status(201).json({ mensaje: 'Espacio creado con éxito', espacio: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el espacio', error: error.message });
  }
};

/**
 * Actualizar un espacio existente
 */
const actualizarEspacioQuery = async (req, res) => {
  try {
    const id = req.params.id;
    const datosEspacio = req.body;
    const resultado = await actualizarEspacioQuery(id, datosEspacio);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Espacio no encontrado' });
    }
    res.json({ mensaje: 'Espacio actualizado con éxito', espacio: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el espacio', error: error.message });
  }
};

/**
 * Eliminar un espacio
 */
const eliminarEspacioQuery = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarEspacioQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Espacio no encontrado' });
    }
    res.json({ mensaje: 'Espacio eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el espacio', error: error.message });
  }
};

export {
  listarEspacios,
  obtenerEspacioPorId,
  crearEspacio,
  actualizarEspacio,
  eliminarEspacio,
};