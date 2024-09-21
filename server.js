const express = require('express');
const bodyParser = require('body-parser');

const professionalRoute = require('./routes/professionalRoute');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/professional', professionalRoute);

app.listen(8080);