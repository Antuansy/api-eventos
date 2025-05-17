import { pool } from '../config.js';

/**
 * Carga la lista de usuarios
 */
const listarTodosUsuariosQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar un usuario por su ID (llave primaria)
 */
const listarUsuarioPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar un nuevo usuario
 */
const crearUsuarioQuery = async (usuario) => {
    const { nombres } = usuario;
    try {
        const result = await pool.query(
            'INSERT INTO usuarios (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar un usuario por su ID
 */
const actualizarUsuarioQuery = async (id, usuario) => {
    const { nombres } = usuario;
    try {
        const result = await pool.query(
            'UPDATE usuarios SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar un usuario por su ID
 */
const eliminarUsuarioQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM usuarios WHERE id = $1 RETURNING *',
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
    listarTodosUsuariosQuery,
    listarUsuarioPorIdQuery,
    crearUsuarioQuery,
    actualizarUsuarioQuery,
    eliminarUsuarioQuery
}