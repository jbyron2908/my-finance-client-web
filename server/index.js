const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const middlewares = require('./middlewares');

const SERVER_PORT = process.env.PORT || 3000;
const PUBLIC_FOLDER = path.resolve(__dirname, '..', 'dist');

const setupServer = () => {
  const app = express();

  app.use(
    middlewares.xPoweredBy(),
    middlewares.log() // eslint-disable-line
  );

  app.get('/health', (req, res) => res.sendStatus(200));

  app.use(express.static(PUBLIC_FOLDER)); // eslint-disable-line
  app.use(history({
    verbose: true,
  }));
  app.use(express.static(PUBLIC_FOLDER)); // eslint-disable-line

  return app;
};

if (require.main === module) {
  setupServer().listen(SERVER_PORT, (error) => {
    if (error) {
      return console.error(error);
    }
    return console.log('Webserver started at', SERVER_PORT);
  });
}

module.exports = setupServer;
