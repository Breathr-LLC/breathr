
const query = require('../db/postgresql');
const poemsModel = {};

poemsModel.markFavorite = async (userID, poemID) => {
  const args = [userID, poemID];
  const sql = 'INSERT INTO users_poems (user_id, poem_id) VALUES ($1, $2)';
  return await query(sql, args);
};

poemsModel.getFavorites = async (userID) => {
  const args = [userID];
  const sql = ''; // TBD
  const result = await query(sql, args);
  console.log('Rows returned from db:', result);
  return result;
};

module.exports = poemsModel;