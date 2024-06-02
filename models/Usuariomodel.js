const axios = require('axios');

class Usuario {
    constructor(id, usuario, email, passwordHash) {
        this.id = id;
        this.usuario = usuario;
        this.email = email;
        this.passwordHash = passwordHash;
    }
}

async function registrarUsuario(usuario, email, passwordHash) {

    try {
        const response = await axios.post(`${process.env.BASE_URL}/api/registro`, {
            usuario,
            email,
            passwordHash
        },);

        return response.data.id; // Retorna el ID del nuevo usuario registrado
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        throw error; // Lanza el error para manejarlo en el servidor
    }
}


async function logearUsuario(email, passwordHash) {
    try {
        const response = await axios.post(`${process.env.BASE_URL}/api/login`, {email, passwordHash});
        const usuario = response.data;
        return new Usuario(usuario.id, usuario.usuario, usuario.email, usuario.passwordHash);
    } catch (error) {
        console.error('Error al obtener usuario por nombre:', error);
        throw error;
    }
}
async function obtenerUsuarios() {
    try {
        const response = await axios.get(`${process.env.BASE_URL}/api/usuarios`);
        return response.data.map(user => new Usuario(user.id, user.usuario, user.email, user.passwordHash));
    } catch (error) {
        console.error('Error al obtener usuarios', error);
        throw error;
    }
}

module.exports = {
    registrarUsuario,
    logearUsuario,
    obtenerUsuarios
};
