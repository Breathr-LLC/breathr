const journalModel = require('../models/journalsModel');
const journalController = {};

// builds error object for input to global error handler
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `journalController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `journalController.${method}: ERROR: Check server logs for details.` }
  };
};

journalController.getJournalEntries = async (req, res, next) => {
  const { userID } = req.params;
  const dbResponse = await journalModel.getJournalEntries(userID);
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'getJournalEntries',
      type: 'Reading from database',
      err: dbResponse
    }));
  }
  res.locals.entries = dbResponse.rows;
  return next();
};

journalController.getJournalEntry = async (req, res, next) => {
  const { entryID } = req.params;
  const dbResponse = await journalModel.getJournalEntry(entryID);
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'getJournalEntry',
      type: 'Reading from database',
      err: dbResponse
    }));
  }
  res.locals.entry = dbResponse.rows;
  return next();
};

journalController.deleteEntry = async (req, res, next) => {
  const { entryID } = req.params;
  const dbResponse = await journalModel.deleteEntry(entryID);
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'deleteEntry',
      type: 'Deleting from database',
      err: dbResponse
    }));
  }
  return next();
};

journalController.addEntry = async (req, res, next) => {
  const { title, category, text, user_id, date } = req.body;
  if (!title || !category || !text || !user_id || !date) return next(
    createErr({
      method: 'addEntry',
      type: 'Parsing request body',
      err: 'Entry information provided is incomplete'
    }));
  const dbResponse = await journalModel.addEntry(
    title, category, text, date, user_id
  );
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'addEntry',
      type: 'Writing to database',
      err: dbResponse
    }));
  }
  return next();
};

journalController.updateEntry = async (req, res, next) => {
  const { title, category, text, date, entry_id } = req.body;
  // handle case where no data is provided
};

module.exports = journalController;