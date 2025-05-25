// db/usuariosQuery.js
import pool from './db.js';

const listarUsuariosQuery = async () => {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
};

const obtenerUsuarioPorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [id]);
    return result.rows[0];
};

const crearUsuarioQuery = async ({ nombre, correo, telefono, tipo }) => {
    const result = await pool.query(
        'INSERT INTO usuarios (nombre, correo, telefono, tipo) VALUES ($1, $2, $3, $4) RETURNING *',
        [nombre, correo, telefono, tipo]
    );
    return result.rows[0];
};

const actualizarUsuarioQuery = async (id, { nombre, correo, telefono, tipo }) => {
    const result = await pool.query(
        'UPDATE usuarios SET nombre = $1, correo = $2, telefono = $3, tipo = $4 WHERE id_usuario = $5 RETURNING *',
        [nombre, correo, telefono, tipo, id]
    );
    return result.rows[0];
};

const eliminarUsuarioQuery = async (id) => {
    const result = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarUsuariosQuery,
    obtenerUsuarioPorIdQuery,
    crearUsuarioQuery,
    actualizarUsuarioQuery,
    eliminarUsuarioQuery
};
