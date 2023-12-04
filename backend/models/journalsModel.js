const query = require('../db/postgresql');
const journalsModel = {};

journalsModel.getJournalEntries = async (userID) => {
  const args = [userID];
  const sql = 'SELECT journal_entries.entry_id, journal_entries.title, journal_entries.category, journal_entries.date ' +
              'FROM journal_entries ' +
              'WHERE journal_entries.user_id = $1 ' +
              'ORDER BY date';
  return await query(sql, args);
};

journalsModel.getJournalEntry = async (entryID) => {
  const args = [entryID];
  const sql = 'SELECT journal_entries.entry_id, journal_entries.title, journal_entries.text, journal_entries.category, journal_entries.date ' +
              'FROM journal_entries ' +
              'WHERE journal_entries.entry_id = $1 ';
  return await query(sql, args);
};

journalsModel.deleteEntry = async (entryID) => {
  const args = [entryID];
  const sql = 'DELETE FROM journal_entries WHERE journal_entries.entry_id = $1';
  return await query(sql, args);
};

journalsModel.addEntry = async (title, category, text, date, user_id) => {
  const args = [title, category, text, date, user_id];
  const sql = 'INSERT INTO journal_entries (title, category, text, date, user_id) ' +
              'VALUES ($1, $2, $3, $4, $5)';
  return await query(sql, args);
};

journalsModel.updateEntry = async (title, category, text, date, entry_id) => {
  const args = [title, category, text, date, entry_id];
  const sql = 'UPDATE journal_entries ' +
              'SET title = $1, category = $2, text = $3, date = $4 ' +
              'WHERE entry_id = $5';
  return await query(sql, args);
};

module.exports = journalsModel;