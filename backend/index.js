const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const config    = require('./config');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const movieDetails = require('./app/movieDetails');
const movie        = require('./app/movie');

const run = async () => {
  await mongoose.connect(config.database,config.databaseOptions);

    app.use('/movie',movie);
    app.use('/details',movieDetails);

  app.listen(config.port);
};

run().catch((e) => {
   console.log(e);
});