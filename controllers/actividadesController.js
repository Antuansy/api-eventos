import {
    listarTodasActividadesQuery,
    listarActividadPorIdQuery,
    crearActividadQuery,
    actualizarActividadQuery,
    eliminarActividadQuery
  } from "../db/actividadesQuery.js";
  
  /**
   * Obtener todos las actividades de la base de datos
   */
  const listarTodasActividades = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const actividades = await listarTodasActividadesQuery();
      res.json(actividades);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener la actividad con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarActividadPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const actividad = await listarActividadPorIdQuery(req.params.id);
      res.json(actividad);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un actividad
   */
  const crearActividad = async (req, res) => {
    console.log(req.body)
    try {
        const datosActividad = req.body;
        const resultado = await crearActividadQuery(datosActividad);
        res.json({ mensaje: 'Actividad creada con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de una actividad
   */
  const actualizarActividad = async (req, res) => {
    try {
        const id = req.params.id;
        const datosActividad = req.body;
        const resultado = await actualizarActividadQuery(id, datosActividad);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Actividad actualizada con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Actividad no encontrada' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar una actividad
   */
  const eliminarActividad = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarActividadQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Actividad eliminada con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Actividad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la actividad', error: error.message });
    }
  };
  
  export {
    listarTodasActividades,
    listarActividadPorId,
    crearActividad,
    actualizarActividad,
    eliminarActividad,
  };