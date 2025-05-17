import { pool } from '../config.js';

/**
 * Carga la lista de espacios
 */
const listarTodosEspaciosQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM espacios');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar un espacio por su ID (llave primaria)
 */
const listarEspacioPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM espacios WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar un nuevo espacio
 */
const crearEspacioQuery = async (espacio) => {
    const { nombres } = espacio;
    try {
        const result = await pool.query(
            'INSERT INTO espacios (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar un espacio por su ID
 */
const actualizarEspacioQuery = async (id, espacio) => {
    const { nombres } = espacio;
    try {
        const result = await pool.query(
            'UPDATE espacios SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar un espacio por su ID
 */
const eliminarEspacioQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM espacios WHERE id = $1 RETURNING *',
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
    listarTodosEspaciosQuery,
    listarEspacioPorIdQuery,
    crearEspacioQuery,
    actualizarEspacioQuery,
    eliminarEspacioQuery
}