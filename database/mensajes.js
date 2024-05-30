const pool = require('../database/conexion');

async function getMensajesById (id) {
    let conexion; 
    try {
        conexion = await pool.getConnection();
        const [results] = await conexion.query('SELECT * FROM chat WHERE idEmisor = ?', [id]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener los mensajes por ID:', error);
        throw error;
    } finally {
        if (conexion) {
            conexion.release();
        }
    }
}

module.exports = {
    getMensajesById
}