const express = require('express');
const router = express.Router(); 
const { obtenerUsuarios } = require('../models/Usuariomodel');


router.get('/', async (req, res) => {
  try {
      const usuarios = await obtenerUsuarios();
      console.log("Estos son los usuarios: ", usuarios);
      res.render('index', { usuarios });
  } catch (error) {
      console.error('Error en el controlador al obtener usuarios:', error);
      res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

router.get('/', async (req, res) => {
  try {
      const usuarios = await obtenerUsuarios();
      console.log("Estos son los usuarios: ", usuarios);
      res.render('index', { usuarios });
  } catch (error) {
      console.error('Error en el controlador al obtener usuarios:', error);
      res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});
module.exports = router;