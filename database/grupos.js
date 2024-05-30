const pool = require('../database/conexion');

async function createPublicGroup (Iduser_1, Iduser_2, Iduser_3, Iduser_4){
    let conexion;
    try {
        conexion = await pool.getConnection();
        const [results] = await conexion.query('INSERT INTO sala_publica (id_usuario_1, id_usuario_2, id_usuario_3, id_usuario_4)', [Iduser_1, Iduser_2, Iduser_3, Iduser_4]);
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

async function createPrivateGroup (Iduser_1, Iduser_2, Iduser_3, Iduser_4){
    let conexion;
    try {
        conexion = await pool.getConnection();
        const [results] = await conexion.query('INSERT INTO sala_privada (id_usuario_1, id_usuario_2, id_usuario_3, id_usuario_4)', [Iduser_1, Iduser_2, Iduser_3, Iduser_4]);
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