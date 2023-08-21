const express = require('express');
const { addMovie, getAllMovies, getMovieById } = require('../controllers/movie-controller');
const movieRouter = express.Router();


movieRouter.post('/add', addMovie);
movieRouter.get('/', getAllMovies);
movieRouter.get('/:id', getMovieById);

module.exports = movieRouter;