import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function testConnection() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: process.env.MYSQL_PORT
        });

        console.log('Connecting to the database...');
        await connection.connect();
        console.log('Connection successful');
        await connection.end();
    } catch (error) {
        console.error('Connection failed:', error);
    }
}

testConnection();
