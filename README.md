# Ordinario
Este proyecto es una aplicacion de Chat, el cual va de la mano con una api 
y de una bd hecha en mysql, el propósito es hacer que la app, se comunique con 
la api para realizar las peticiones que se llevaran a la bd y de regreso.
Dependencias utilizadas: 
"dependencies": {
    "axios": "^1.7.2",
    "bcrypt": "5.1.1",
    "body-parser": "^1.20.2",
    "connect-flash": "^0.1.1",
    "connect-sqlite3": "^0.9.15",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-session": "^1.18.0",
    "mysql2": "^3.9.8",
    "nodemon": "^3.1.2",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "pug": "^3.0.2",
    "sass": "^1.77.2"
  }
instrucciones para usar la app
-primero se debe de inicializar el scrip de la bd
que se llama Chat, desepues de esto el script llamado
chatperson, despues la api, la cual se corre con el comando 
"npm run dev"
y seguido de esto la app principal llamada Ordinario, se corre con el comando "npm install"
