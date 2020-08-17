const express = require('express');
const router = express.Router();

// route path follow -> '/api'

const movieRouter = require('./movieRouter');

router.use('/movie', movieRouter);

module.exports = router;