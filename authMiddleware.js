// este es un middleware de autenticación
const authMiddleware = (req, res, next) => {
    // aqui se verifica si el usuario está autenticado
    if (req.isAuthenticated()) {
        // Si el usuario está autenticado, establecer la variable isAuthenticated en true
        res.locals.isAuthenticated = true;
        res.redirect('/');
    } else {
        // Si el usuario no está autenticado, establecer la variable isAuthenticated en false
        res.locals.isAuthenticated = false;
        res.redirect('/login');
    }
    // Continuar con el siguiente middleware
    next();
};

module.exports = authMiddleware;
