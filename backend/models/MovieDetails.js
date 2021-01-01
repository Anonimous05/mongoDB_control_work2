const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieDetailsSchema = new Schema({
    movieTrailer: {
        type: String,
        required:true,
    },
    movieTrailerHd: {
        type: String,
        required: true,
    },
    movieDescription: String,
    details: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
    }
});

const movie = mongoose.model('MovieDetails',movieDetailsSchema);

module.exports = movie;