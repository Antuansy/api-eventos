// db/eventosQuery.js
import pool from './db.js';

const listarEventosQuery = async () => {
    const result = await pool.query('SELECT * FROM eventos');
    return result.rows;
};

const obtenerEventoPorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM eventos WHERE id_evento = $1', [id]);
    return result.rows[0];
};

const crearEventoQuery = async ({ nombre, descripcion, fecha, hora, id_espacio, id_organizador }) => {
    const result = await pool.query(
        'INSERT INTO eventos (nombre, descripcion, fecha, hora, id_espacio, id_organizador) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [nombre, descripcion, fecha, hora, id_espacio, id_organizador]
    );
    return result.rows[0];
};

const actualizarEventoQuery = async (id, { nombre, descripcion, fecha, hora, id_espacio, id_organizador }) => {
    const result = await pool.query(
        'UPDATE eventos SET nombre = $1, descripcion = $2, fecha = $3, hora = $4, id_espacio = $5, id_organizador = $6 WHERE id_evento = $7 RETURNING *',
        [nombre, descripcion, fecha, hora, id_espacio, id_organizador, id]
    );
    return result.rows[0];
};

const eliminarEventoQuery = async (id) => {
    const result = await pool.query('DELETE FROM eventos WHERE id_evento = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarEventosQuery,
    obtenerEventoPorIdQuery,
    crearEventoQuery,
    actualizarEventoQuery,
    eliminarEventoQuery
};

