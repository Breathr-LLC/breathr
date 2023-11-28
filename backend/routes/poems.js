const poemController = require('../controllers/poemController');
const express = require('express');
const poemRouter = express.Router();

poemRouter.post('/markFavorite', poemController.markFavorite, (req, res) => res.sendStatus(201));

poemRouter.get('/getFavorites', poemController.getFavorites, (req, res) => res.status(200).json(res.locals.rows));

module.exports = poemRouter;