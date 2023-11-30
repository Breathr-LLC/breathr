
const query = require('../db/postgresql');
const poemsModel = {};

poemsModel.markFavorite = async (userID, poemID) => {
  const args = [userID, poemID];
  const sql = 'INSERT INTO users_poems (user_id, poem_id) VALUES ($1, $2)';
  return await query(sql, args);
};

poemsModel.removeFavorite = async (userID, poemID) => {
  const args = [userID, poemID];
  const sql = 'DELETE FROM users_poems WHERE user_id = $1 AND poem_id = $2';
  return await query(sql, args);
};

poemsModel.getFavorites = async (userID) => {
  const args = [userID];
  const sql = 'SELECT poems.poem_id, poems.title, authors.first_name, authors.last_name ' +
              'FROM ((authors INNER JOIN poems ON authors.author_id = poems.author_id) ' +
              'INNER JOIN users_poems ON users_poems.poem_id = poems.poem_id) ' +
              'WHERE users_poems.user_id = $1 ' +
              'ORDER BY poems.title';
  return await query(sql, args);
};

poemsModel.getAllPoems = async () => {
  const sql = 'SELECT poems.poem_id, poems.title, authors.first_name, authors.last_name ' +
              'FROM authors INNER JOIN poems ON authors.author_id = poems.author_id ' +
              'ORDER BY poems.title';
  return await query(sql, []);
};

poemsModel.getSinglePoem = async (poemID) => {
  const args = [poemID];
  const sql = 'SELECT poems.poem_id, poems.title, poems.text, authors.first_name, authors.last_name ' +
              'FROM authors INNER JOIN poems ON authors.author_id = poems.author_id ' +
              'WHERE poems.poem_id = $1';
  return await query(sql, args);
};

module.exports = poemsModel;