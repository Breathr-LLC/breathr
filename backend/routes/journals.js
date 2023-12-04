const journalController = require('../controllers/journalController');
const express = require('express');
const journalRouter = express.Router();

journalRouter.get('/getJournalEntries/user-:userID(\\d+)', journalController.getJournalEntries, (req, res) => res.status(200).json(res.locals.entries));
journalRouter.get('/getJournalEntry/entry-:entryID(\\d+)', journalController.getJournalEntry, (req, res) => res.status(200).json(res.locals.entry));
journalRouter.delete('/deleteEntry/entry-:entryID(\\d+)', journalController.deleteEntry, (req, res) => res.sendStatus(204));
journalRouter.post('/addEntry', journalController.addEntry, (req, res) => res.sendStatus(201));
journalRouter.put('/updateEntry', journalController.updateEntry, (req, res) => res.sendStatus(200));

module.exports = journalRouter;