const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool({
  connectionString,
  max: 2,
});

// every time we make a query to the database, this function will fire
async function query(sql, params) {
  try {
    const client = await pool.connect();
    const result = await client.query(sql, params);
    // release the client so that it doesn't take up memory
    client.release();
    console.log('connected to db')
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = query;
