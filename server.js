const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const conexion = require('./database/conexion');
const cookieParser=require('cookie-parser');
const router = require('./routes/routes');
const flash=require('connect-flash');



app.use(cookieParser());
app.use(flash());

// Configuración de express-session
app.use(session({
  secret: process.env.ACCESS_TOKEN_SECRET, // Cambia esto por una cadena de caracteres aleatoria y segura
  resave: false,
  saveUninitialized: false,
}));

// Configuración de passport
passport.use(new LocalStrategy(
  function (username, password, done) {
      usuarios.getUserPorEmail(username)
          .then(user => {
              if (!user) {
                  return done(null, false, { message: 'Usuario no encontrado' });
              }
              return done(null, user);
          })
          .catch(err => done(err));
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  usuarios.getId(id)
      .then(user => done(null, user))
      .catch(err => done(err));
});

// Middleware de passport
app.use(passport.initialize());
app.use(passport.session());



// Middleware para establecer isAuthenticated en las vistas
app.use(function(req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  console.log(req.isAuthenticated());
  next();
});

// Configuración de las vistas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Configuración de archivos estáticos
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de las rutas
app.use('/', router);

// Puerto en el que escucha el servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
