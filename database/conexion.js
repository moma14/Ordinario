const mysql2 = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Crea el pool de conexión con la configuración de variables de entorno
const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log("Perfecto!");

// Exporta el pool de conexiones
module.exports = pool.promise();
