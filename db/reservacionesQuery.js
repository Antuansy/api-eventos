// db/reservacionesQuery.js
import pool from './db.js';

const listarReservacionesQuery = async () => {
    const result = await pool.query('SELECT * FROM reservaciones');
    return result.rows;
};

const obtenerReservacionPorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM reservaciones WHERE id_reservacion = $1', [id]);
    return result.rows[0];
};

const crearReservacionQuery = async ({ id_evento, id_asistente, fecha_reserva }) => {
    const result = await pool.query(
        'INSERT INTO reservaciones (id_evento, id_asistente, fecha_reserva) VALUES ($1, $2, $3) RETURNING *',
        [id_evento, id_asistente, fecha_reserva]
    );
    return result.rows[0];
};

const actualizarReservacionQuery = async (id, { id_evento, id_asistente, fecha_reserva }) => {
    const result = await pool.query(
        'UPDATE reservaciones SET id_evento = $1, id_asistente = $2, fecha_reserva = $3 WHERE id_reservacion = $4 RETURNING *',
        [id_evento, id_asistente, fecha_reserva, id]
    );
    return result.rows[0];
};

const eliminarReservacionQuery = async (id) => {
    const result = await pool.query('DELETE FROM reservaciones WHERE id_reservacion = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarReservacionesQuery,
    obtenerReservacionPorIdQuery,
    crearReservacionQuery,
    actualizarReservacionQuery,
    eliminarReservacionQuery
};
