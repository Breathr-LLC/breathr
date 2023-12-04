const query = require('./postgresql');

async function createTable() {
  const sql = 'CREATE TABLE IF NOT EXISTS poems (id SERIAL PRIMARY KEY, content TEXT)';
  await query(sql);

  console.log('created table');
}

async function insert() {
  const sql = 'INSERT INTO authors (first_name, last_name) VALUES (\'AJ\', \'Mattus\')';
  const params = ['Jeanine', 'Peters']
  await query(sql, []);

  console.log('inserted into table');
}

// createTable();
insert();