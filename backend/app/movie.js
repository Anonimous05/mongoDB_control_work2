const express   = require('express');
const Movie     = require('../models/Movie');

const router    = express.Router();

router.get('/', async (req, res) => {
    try{
            const movies = await Movie.find();
            res.send(movies);
    }catch (e) {
        res.status(400).send(e);
    }
});

router.post('/:categories', async (req, res) => {
   try {
       const movie = await Movie.findOne({categories: req.params.categories});
       res.send(movie);
   } catch (e) {
       res.status(404).send(e);
   }
});

module.exports = router;