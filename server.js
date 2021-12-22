const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

require('dotenv').config({ path: './.env' });

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));

// app.use() middleware here ^ ///////////////////

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
