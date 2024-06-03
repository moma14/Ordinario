const axios = require('axios');
const dotenv = require('dotenv');

// Configura DotEnv
dotenv.config();

class Chat {
  constructor(id, idReceptor, idEmisor, chat, multimedia) {
    this.id = id;
    this.idReceptor = parseInt(idReceptor, 10);
    this.idEmisor = parseInt(idEmisor, 10);
    this.chat = chat;
    this.multimedia = multimedia;
  }
}

async function EnviarMensaje(chat, idReceptor, multimedia, idEmisor) {
  try {
    const response = await axios.post(`${process.env.BASE_URL}/api/send-message`, { chat, idReceptor, idEmisor, multimedia });
    if (response.data.success) {
        return new Chat(null, idReceptor, idEmisor, chat, multimedia);
    } else {
        throw new Error('Error al enviar el mensaje');
    }
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    throw error;
  }
}

async function obtenerMensajesPorIds(idEmisor, idReceptor) {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/api/get-messages/${idEmisor}/${idReceptor}`);
    const chats = response.data;
    return chats.map(chat => new Chat(chat.id, chat.receptor_id, chat.emisor_id, chat.mensaje, chat.multimedia));
  } catch (error) {
    console.error('Error al obtener los mensajes por IDs:', error);
    throw error;
  }
}

module.exports = {
  EnviarMensaje,
  obtenerMensajesPorIds
};
