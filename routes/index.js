const express = require('express');
const router = express.Router(); 


router.get('/', (req, res) => {
  res.render('index', { title: req.user != null ? `Bienvenido ${req.user.nombre}` : 'Traductor de Texto' , user: req.user != null ? `Bienvenido ${req.user.nombre}` : ''});
});

module.exports = router;