const journalController = require('../controllers/journalController');
const express = require('express');
const journalRouter = express.Router();

journalRouter.get('/getJournalEntries/user-:userID(\\d+)', journalController.getJournalEntries, (req, res) => res.status(200).json(res.locals.entries));
journalRouter.get('/getJournalEntry/entry-:entryID(\\d+)', journalController.getJournalEntry, (req, res) => res.status(200).json(res.locals.entry));
// get single journal entry
// delete entry
// add entry
// update entry

module.exports = journalRouter;