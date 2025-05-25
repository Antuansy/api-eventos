// db/espaciosQuery.js
import pool from './db.js';

const listarEspaciosQuery = async () => {
    const result = await pool.query('SELECT * FROM espacios');
    return result.rows;
};

const obtenerEspacioPorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM espacios WHERE id_espacio = $1', [id]);
    return result.rows[0];
};

const crearEspacioQuery = async ({ nombre, ubicacion, capacidad }) => {
    const result = await pool.query(
        'INSERT INTO espacios (nombre, ubicacion, capacidad) VALUES ($1, $2, $3) RETURNING *',
        [nombre, ubicacion, capacidad]
    );
    return result.rows[0];
};

const actualizarEspacioQuery = async (id, { nombre, ubicacion, capacidad }) => {
    const result = await pool.query(
        'UPDATE espacios SET nombre = $1, ubicacion = $2, capacidad = $3 WHERE id_espacio = $4 RETURNING *',
        [nombre, ubicacion, capacidad, id]
    );
    return result.rows[0];
};

const eliminarEspacioQuery = async (id) => {
    const result = await pool.query('DELETE FROM espacios WHERE id_espacio = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarEspaciosQuery,
    obtenerEspacioPorIdQuery,
    crearEspacioQuery,
    actualizarEspacioQuery,
    eliminarEspacioQuery
};
