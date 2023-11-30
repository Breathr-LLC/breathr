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

// post new entry
// update entry
// delete entry

module.exports = journalsModel;