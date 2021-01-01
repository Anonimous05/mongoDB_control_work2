const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    movieImage: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        enum: ['horror','comedy','detective'],
    }
});

const movie = mongoose.model('Movie',movieSchema);

module.exports = movie;