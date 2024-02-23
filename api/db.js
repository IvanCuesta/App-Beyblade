import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dbbeyblade'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Conexión exitosa a la base de datos.');
});

export default connection;



