const { registroUser } = require('../database/usuarios');

const registrarUsuario = async (usuario, email, passwordHash) => {
    try {
        const result = await registroUser(usuario, email, passwordHash);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = { registrarUsuario };