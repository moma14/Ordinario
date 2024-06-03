const express = require('express');
const router = express.Router();
const { obtenerMensajesPorIds, EnviarMensaje } = require('../models/Mensajesmodel');

// Ruta para obtener mensajes por ID de emisor y receptor
router.get('/get-messages/:id', async (req, res) => {
    try {
        const receptor_id = parseInt(req.params.id, 10); // Asegúrate de que el receptor_id es un número
        const emisor_id = parseInt(req.session.userId, 10); // Suponiendo que tienes el ID del usuario logueado
        const mensajes = await obtenerMensajesPorIds(emisor_id, receptor_id); // Llama a la función con los IDs correctos
        res.render('chat', { 
            title: 'Chat privado', 
            mensajes, 
            emisor_id,
            receptor_id
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Ruta para enviar mensajes
router.post('/send-messages', async (req, res) => {
    try {
        const { contenido, receptor_id, multimedia } = req.body;
        console.log("Cuerpo del mensaje: ", req.body);
        const emisor_id = parseInt(req.session.userId, 10); // Suponiendo que tienes el ID del usuario logueado
        console.log("ID del emisor: ", emisor_id);
        const nuevoMensaje = await EnviarMensaje(contenido, parseInt(receptor_id, 10), multimedia, emisor_id); // Pasa el ID del emisor
        console.log(nuevoMensaje);
        res.redirect(`/api/get-messages/${receptor_id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
