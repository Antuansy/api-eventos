import { pool } from '../config.js';

/**
 * Carga la lista de actividades
 */
const listarTodasActividadesQuery = async () => {
    try {
        const result = await config.query('SELECT * FROM actividades');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar una actividad por su ID (llave primaria)
 */
const listarActividadPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM actividades WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar una nueva actividad
 */
const crearActividadQuery = async (actividad) => {
    const { nombres } = actividad;
    try {
        const result = await pool.query(
            'INSERT INTO actividades (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar una actividad por su ID
 */
const actualizarActividadQuery = async (id, actividad) => {
    const { nombres } = actividad;
    try {
        const result = await pool.query(
            'UPDATE actividades SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar una actividad por su ID
 */
const eliminarActividadQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM actividades WHERE id = $1 RETURNING *',
            [id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodasActividadesQuery,
    listarActividadPorIdQuery,
    crearActividadQuery,
    actualizarActividadQuery,
    eliminarActividadQuery
}