const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{ type: String, required: true},
    director: { type: String},
    year: {type: Number},
    like: {type: Number, default: 0}
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;