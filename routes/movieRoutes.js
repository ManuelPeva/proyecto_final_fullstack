const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

router.get('/movies', movieController.getAllMovies);
router.post('/movies', movieController.createMovie);
router.delete('/movies/:id', movieController.deleteMovie);
router.put('/movies/:id/like', movieController.likeMovie);

module.exports = router;
