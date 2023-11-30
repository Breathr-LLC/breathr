const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api');

// handle parsing request body
app.use(express.json());

// route handlers
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  res.status(404).send('Uh oh! Page does not exist.');
});

// configure express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log); // error log for developer
  res.status(errorObj.status).json(errorObj.message); // error message for client
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
