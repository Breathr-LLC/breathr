const poemController = require('../controllers/poemController');
const express = require('express');
const poemRouter = express.Router();

poemRouter.post('/markFavorite', poemController.markFavorite, (req, res) => res.sendStatus(201));
poemRouter.delete('/removeFavorite', poemController.removeFavorite, (req, res) => res.sendStatus(204));
poemRouter.get('/getFavorites', poemController.getFavorites, (req, res) => res.status(200).json(res.locals.favorites));
poemRouter.get('/getAllPoems', poemController.getAllPoems, (req, res) => res.status(200).json(res.locals.poems));
poemRouter.get('/getSinglePoem', poemController.getSinglePoem, (req, res) => res.status(200).json(res.locals.poem));

module.exports = poemRouter;