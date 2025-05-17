import { pool } from '../config.js';

/**
 * Carga la lista de eventos
 */
const listarTodosEventosQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM eventos');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar un evento por su ID (llave primaria)
 */
const listarEventoPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM eventos WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar un nuevo evento
 */
const crearEventoQuery = async (evento) => {
    const { nombres } = evento;
    try {
        const result = await pool.query(
            'INSERT INTO eventos (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar un evento por su ID
 */
const actualizarEventoQuery = async (id, evento) => {
    const { nombres } = evento;
    try {
        const result = await pool.query(
            'UPDATE eventos SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar un evento por su ID
 */
const eliminarEventoQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM eventos WHERE id = $1 RETURNING *',
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
    listarTodosEventosQuery,
    listarEventoPorIdQuery,
    crearEventoQuery,
    actualizarEventoQuery,
    eliminarEventoQuery
}