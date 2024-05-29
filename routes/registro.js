const express = require('express');
const router = express.Router();
const { registroUsuario } = require('../controllers/userController');

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
    res.render('registro', { title: 'Registrarse' });
});

// Ruta para manejar el registro de usuarios
router.post('/', registroUsuario, (req, res) => {
    // Después de registrar al usuario, redirige al usuario al login
    res.redirect('/login');
});

module.exports = router;
