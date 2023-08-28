const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

async function fetchAll(SQL, params = []) {
    
    const client = await pool.connect()

    try {
        const { rows } = await client.query(SQL, params);
        return rows;

    } catch (error) {
        console.log('db error', error.message);

    }
    finally {
        await client.release()
    }
}

module.exports = fetchAll;