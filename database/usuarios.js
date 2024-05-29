const pool = require('../database/conexion');
const bcrypt = require('bcrypt');

// Función para generar el hash de una contraseña
async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

// Función para comparar una contraseña con un hash
async function comparePassword(password, hashedPassword) {
    try {
        // Compara la contraseña proporcionada con el hash almacenado
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw error;
    }
}

// Función para insertar un nuevo usuario en la base de datos
async function registroUser(usuario, email, passwordHash) {
    let conexion;
    try {
        conexion = await pool.getConnection();
        await conexion.query('INSERT INTO usuarios (usuario, email, passwordHash) VALUES (?,?,?)', [usuario, email, passwordHash]);
        return true;
    } catch (error) {
        console.error('Error al registrarse: ', error);
        throw error;
    } finally {
        if (conexion) {
            conexion.release();
        }
    }
}

// Función para obtener un usuario por su nombre
async function getUserPorEmail(email) {
    let conexion;
    try {
        conexion = await pool.getConnection();
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener el usuario por email:', error);
        throw error;
    } finally {
        if (conexion) {
            conexion.release();
        }
    }
}

// Función para obtener un usuario por su ID
async function getId(id) {
    let conexion;
    try {
        conexion = await pool.getConnection();
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        throw error;
    } finally {
        if (conexion) {
            conexion.release();
        }
    }
}

module.exports = {
    hashPassword,
    comparePassword,
    registroUser,
    getUserPorEmail,
    getId
};
