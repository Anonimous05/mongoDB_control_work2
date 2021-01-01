const express   = require('express');
const MovieDetails = require('../models/MovieDetails');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const details = await MovieDetails.findOne({details: req.params.id}).populate("details");
        res.send(details);
    }catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;