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
poemController.removeFavorite = (req, res, next) => {

} ;

// get favorite poems data (poem_id, title, author) for the given user
// allows for creation of list of favorite poems on frontend
poemController.getFavorites = async (req, res, next) => {
  const { userID } = req.body;
  if (!userID) {
    return next(createErr({
      method: 'getFavorites',
      type: 'Parsing request body',
      err: 'User ID not provided'
    }));
  }
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

module.exports = poemController;