const express = require('express');
const router = express.Router();

const movieSchema = require('../models/movieSchema');

// route path follow -> '/api/movie'

// route -> '/api/movie/getAll/movieDetail'
// fetch all movie
router.get('/getAll/movieDetail', (req, res) => {
    res.send('movie api work')
});

// route -> '/api/movie/getOne/movieDetail/:movieId'
// fetch one movie
router.get('/getOne/movieDetail/:movieId', (req, res) => {
    res.send('movie api work')
});

// route -> '/api/movie/add/movieDetail'
// add new movie
router.post('/add/movieDetail', (req, res) => {
    res.send('movie api work')
});

// route -> '/api/movie/update/movieDetail/:movieId'
// edit movie
router.put('/update/movieDetail/:movieId', (req, res) => {
    res.send('movie api work')
});

// route -> '/api/movie/update/movieDetail/:movieId'
// delete movie
router.delete('/delete/movieDetail/:movieId', (req, res) => {
    res.send('movie api work')
});

module.exports = router;