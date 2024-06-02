const axios = require('axios');
const dotenv = require('dotenv');

//Configura DotEnv
dotenv.config();

class Mensajes {
  constructor(id, idReceptor, idEmisor, chat, multimedia) {
    this.id = id;
    this.idReceptor = idReceptor;
    this.idEmisor = idEmisor;
    this.chat = chat;
    this.multimedia = multimedia;
  }
}

async function EnviarMensaje(chat, idReceptor, multimedia, token) {
    const axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  try {
    const response = await axios.post(`${process.env.BASE_URL}/send-message`, { chat, idReceptor, multimedia } ,axiosConfig);
    const mensajes = response.data;
    return mensajes.map(mensaje => new Mensaje(mensaje.id,
      mensaje.chat, mensaje.idReceptor, mensaje.multimedia));
  } catch (error) {
    console.error('Error al obtener todos los productos:', error);
    throw error;
  }
}

async function obtenerMensajePorId(id) {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/get-messages/${id}`);
    const mensaje = response.data;
    return new Mensajes(mensaje.id, mensaje.chat,
      mensaje.idReceptor, mensaje.idEmisor, mensaje.chat, mensaje.multimedia);
  } catch (error) {
    console.error('Error al obtener los mensajes por ID:', error);
    throw error;
  }
}

module.exports = {
  EnviarMensaje,
  obtenerMensajePorId
};