const artRouter = require('./art');
const journalRouter = require('./journals');
const poemsRouter = require('./poems');
const userRouter = require('./users');
const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/art', artRouter);
apiRouter.use('/journal', journalRouter);
apiRouter.use('/poems', poemsRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;