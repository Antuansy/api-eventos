// db/actividadesQuery.js
import pool from './db.js';

const listarActividadesQuery = async () => {
    const result = await pool.query('SELECT * FROM actividades');
    return result.rows;
};

const obtenerActividadPorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM actividades WHERE id_actividad = $1', [id]);
    return result.rows[0];
};

const crearActividadQuery = async ({ id_evento, nombre, descripcion, hora_inicio, hora_fin }) => {
    const result = await pool.query(
        'INSERT INTO actividades (id_evento, nombre, descripcion, hora_inicio, hora_fin) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id_evento, nombre, descripcion, hora_inicio, hora_fin]
    );
    return result.rows[0];
};

const actualizarActividadQuery = async (id, { id_evento, nombre, descripcion, hora_inicio, hora_fin }) => {
    const result = await pool.query(
        'UPDATE actividades SET id_evento = $1, nombre = $2, descripcion = $3, hora_inicio = $4, hora_fin = $5 WHERE id_actividad = $6 RETURNING *',
        [id_evento, nombre, descripcion, hora_inicio, hora_fin, id]
    );
    return result.rows[0];
};

const eliminarActividadQuery = async (id) => {
    const result = await pool.query('DELETE FROM actividades WHERE id_actividad = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarActividadesQuery,
    obtenerActividadPorIdQuery,
    crearActividadQuery,
    actualizarActividadQuery,
    eliminarActividadQuery
};
