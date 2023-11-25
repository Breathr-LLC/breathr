const query = require('./db/postgresql');

async function createTable() {
  const sql = 'CREATE TABLE IF NOT EXISTS poems (id SERIAL PRIMARY KEY, content TEXT)';
  await query(sql);

  console.log('created table');
}

async function insert() {
  const sql = 'INSERT INTO poems (content) VALUES ($1)';
  const params = ['Happy poem']
  await query(sql, params);

  console.log('inserted into table');
}

createTable();
insert();