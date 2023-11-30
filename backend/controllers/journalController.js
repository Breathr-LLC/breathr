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

module.exports = journalController;