const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// es la ruta para mostrar el formulario de registro
router.get('/', userController.getForm);

// es la ruta para manejar la solicitud de registro
router.post('/', userController.registroUsuario);

module.exports = router;
