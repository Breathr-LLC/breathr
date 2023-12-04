const poemsModel = require('../models/poemsModel');
const poemController = {};

// builds error object for input to global error handler
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `poemController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `poemController.${method}: ERROR: Check server logs for details.` }
  };
};

// mark a poem as a favorite
poemController.markFavorite = async (req, res, next) => {
  const { userID, poemID } = req.body;
  // verify that request supplies both userID and poemID
  if (!userID || !poemID) {
    return next(createErr({
      method: 'markFavorite',
      type: 'Parsing request body',
      err: 'User ID and/or poem ID not provided'
    }));
  }
  const dbResponse = await poemsModel.markFavorite(userID, poemID);
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'markFavorite',
      type: 'Writing to database',
      err: dbResponse
    }));
  }
  return next();
};

// remove a poem from the given user's favorites
poemController.removeFavorite = async (req, res, next) => {
  const { userID, poemID } = req.params;
  const dbResponse = await poemsModel.removeFavorite(userID, poemID);
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'removeFavorite',
      type: 'Deleting from database',
      err: dbResponse
    }));
  }
  return next();
};

// get favorite poems data (poem_id, title, author) for the given user
// allows for creation of list of favorite poems on frontend
poemController.getFavorites = async (req, res, next) => {
  const { userID } = req.params;
  const dbResponse = await poemsModel.getFavorites(userID);
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'getFavorites',
      type: 'Reading from database',
      err: dbResponse
    }));
  }
  res.locals.favorites = dbResponse.rows;
  return next();
};

// get poems data (poem_id, title, author) for all poems
// allows for creation of list of poems on frontend
poemController.getAllPoems = async (req, res, next) => {
  const dbResponse = await poemsModel.getAllPoems();
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'getAllPoems',
      type: 'Reading from database',
      err: dbResponse
    }));
  }
  res.locals.poems = dbResponse.rows;
  return next();
};

poemController.getSinglePoem = async (req, res, next) => {
  const { poemID } = req.params;
  const dbResponse = await poemsModel.getSinglePoem(poemID);
  // check whether error occurred while accessing db
  if (dbResponse.code) {
    return next(createErr({
      method: 'getSinglePoem',
      type: 'Reading from database',
      err: dbResponse
    }));
  }
  res.locals.poem = dbResponse.rows;
  return next();
};

module.exports = poemController;