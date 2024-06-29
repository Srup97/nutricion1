const mysql = require('mysql2/promise');

// Función para conectar a la base de datos
export const connect = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nutricion_db'
    });
    return connection;
};
