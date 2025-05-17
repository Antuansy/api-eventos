import { pool } from '../config.js';

/**
 * Carga la lista de reservaciones
 */
const listarTodasReservacionesQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM reservaciones');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar una reservacion por su ID (llave primaria)
 */
const listarReservacionPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM reservaciones WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar una nueva reservacion
 */
const crearReservacionQuery = async (reservacion) => {
    const { nombres } = reservacion;
    try {
        const result = await pool.query(
            'INSERT INTO reservaciones (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar una reservacion por su ID
 */
const actualizarReservacionQuery = async (id, reservacion) => {
    const { nombres } = reservacion;
    try {
        const result = await pool.query(
            'UPDATE reservaciones SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar una reservacion por su ID
 */
const eliminarReservacionQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM reservaciones WHERE id = $1 RETURNING *',
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
    listarTodasReservacionesQuery,
    listarReservacionPorIdQuery,
    crearReservacionQuery,
    actualizarReservacionQuery,
    eliminarReservacionQuery
}