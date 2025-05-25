// db/actividadesQuery.js
import pool from './db.js';

const listarActividades = async () => {
    const result = await pool.query('SELECT * FROM actividades');
    return result.rows;
};

const obtenerActividadPorId = async (id) => {
    const result = await pool.query('SELECT * FROM actividades WHERE id_actividad = $1', [id]);
    return result.rows[0];
};

const crearActividad = async ({ id_evento, nombre, descripcion, hora_inicio, hora_fin }) => {
    const result = await pool.query(
        'INSERT INTO actividades (id_evento, nombre, descripcion, hora_inicio, hora_fin) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id_evento, nombre, descripcion, hora_inicio, hora_fin]
    );
    return result.rows[0];
};

const actualizarActividad = async (id, { id_evento, nombre, descripcion, hora_inicio, hora_fin }) => {
    const result = await pool.query(
        'UPDATE actividades SET id_evento = $1, nombre = $2, descripcion = $3, hora_inicio = $4, hora_fin = $5 WHERE id_actividad = $6 RETURNING *',
        [id_evento, nombre, descripcion, hora_inicio, hora_fin, id]
    );
    return result.rows[0];
};

const eliminarActividad = async (id) => {
    const result = await pool.query('DELETE FROM actividades WHERE id_actividad = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarActividades,
    obtenerActividadPorId,
    crearActividad,
    actualizarActividad,
    eliminarActividad
};
