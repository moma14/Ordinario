document.addEventListener('DOMContentLoaded', () => {
    const sendMessageForm = document.getElementById('send-message-form');
    const messageInput = document.getElementById('message-to-send');
    const chatHistory = document.getElementById('chat-history');

    async function EnviarMensaje(chat, idReceptor, multimedia, token) {
      const axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      try {
        const response = await axios.post('/send-message', { chat, idReceptor, multimedia }, axiosConfig);
        const mensajes = response.data;
        return mensajes.map(mensaje => ({
          id: mensaje.id,
          chat: mensaje.chat,
          idReceptor: mensaje.idReceptor,
          multimedia: mensaje.multimedia,
          hora: mensaje.hora,
          nombreEmisor: mensaje.nombreEmisor
        }));
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        throw error;
      }
    }

    sendMessageForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevenir que el formulario recargue la página
      const chat = messageInput.value;
      const idReceptor = someReceptorId; // Reemplaza con el ID del receptor
      const multimedia = null; // Asumiendo que no hay multimedia por ahora
      const token = someToken; // Reemplaza con el token de autenticación

      if (chat.trim() !== '') {
        try {
          const nuevosMensajes = await EnviarMensaje(chat, idReceptor, multimedia, token);
          messageInput.value = ''; // Limpiar el textarea

          // Actualizar el historial de chat con los nuevos mensajes
          nuevosMensajes.forEach(mensaje => {
            const messageElement = document.createElement('li');
            messageElement.classList.add('clearfix');
            messageElement.innerHTML = `
              <div class="message-data align-right">
                <span class="message-data-time">${mensaje.hora}</span>
                &nbsp; &nbsp;s
                <span class="message-data-name">${mensaje.nombreEmisor}</span>
                <i class="fa fa-circle me"></i>
              </div>
              <div class="message other-message float-right">
                ${mensaje.chat}
              </div>
            `;
            chatHistory.appendChild(messageElement);
          });
        } catch (error) {
          console.error('Error al enviar el mensaje:', error);
        }
      }
    });
  });