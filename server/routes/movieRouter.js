const express = require('express');
const router = express.Router();
const mkdirp = require('mkdirp');
const { v4:uuidv4 } = require('uuid');
const fs = require('fs');

const movieSchema = require('../models/movieSchema');

// route path follow -> '/api/movie'

// route -> '/api/movie/getAll/movieDetail'
// fetch all movie
router.get('/getAll/movieDetail', async(req, res) => {
    try {
        movieSchema.find().exec()
        .then(mov => {
            if(!mov || mov.length == 0) {
                return res.json({success: false, message: 'Movie list is empty'})
            };

            res.json({success: true, data: mov})
        })
        .catch(err => {
            res.json({success: false, message: "Something went wrong", error: err});
        });

    } catch (err) {
        res.json({ success: false, message: "Something went wrong", error: err });
    };
});

// route -> '/api/movie/getOne/movieDetail/:movieId'
// fetch one movie
router.get('/getOne/movieDetail/:movieId', async(req, res) => {
    try {
        const movieId = req.params.movieId;

        const movie = await movieSchema.findById(movieId);
        if(!movie) {
            return res.json({success: false, message: `Movie id ${movieId} is not found`});
        };

        res.json({success: true, data: movie});

    } catch (err) {
        res.json({ success: false, message: "Something went wrong", error: err });
    };
});

// route -> '/api/movie/add/movieDetail'
// add new movie
router.post('/add/movieDetail', async(req, res) => {
    try {

        let movieName = req.body.movieName;
        if(!movieName) {
            return res.json({success: false, message: "Movie name is required"});
        };

        const movie = await movieSchema.findOne({movieName: movieName});
        if(movie) {
            return res.json({success: false, message: "Movie name is already exist, choose another!"});
        };
        
        let moviePoster;
        if(req.files) {
            let file = req.files.moviePoster;
            moviePoster = 'uploads/moviePoster/' + uuidv4() + path.extname(file.name);

            if(!fs.existsSync(`./public/uploads/moviePoster`)) {
                mkdirp.sync('public/uploads/moviePoster');
            };

            file.mv(`public/${moviePoster}`, (err) => {
                if(err) return res.send({success:false, message: 'file uploading error'});
    
                console.log('file Uploaded')
            });
        };

        let movieDescription = req.body.movieDescription;
        let releasedDate = req.body.releasedDate; // date
        let rated = req.body.rated;
        let imbd_rating = req.body.imbd_rating; // number
    
        let genre = req.body.genre; // array
        
        let directorName = req.body.directorName; // array
    
        let writerName = req.body.writerName; // array
    
        let actorName = req.body.actorName; // array

        movieSchema.create({
            movieName: movieName,
            moviePoster: moviePoster,
            movieDescription: movieDescription,
            releasedDate: releasedDate, // date
            rated: rated,
            imbd_rating: imbd_rating, // number
            genre: genre,
            directorName: directorName,
            writerName: writerName,
            actorName: actorName
            
        })
        .then(mov => {

            res.json({success: true, message: 'Movie added', data: mov});

        })
        .catch(err => {
            res.json({success: false, message: "Something went wrong", error: err});
        });

    } catch (err) {
        res.json({ success: false, message: "Something went wrong", error: err });
    };
});

// route -> '/api/movie/update/movieDetail/:movieId'
// edit movie
router.put('/update/movieDetail/:movieId', async(req, res) => {
    try {
        const movieId = req.params.movieId;
        
        const movie = await movieSchema.findById(movieId);
        if(!movie) {
            return res.json({success: false, message: `Movie id ${movieId} is not found`});
        };

        let toUpdate = {};

        if(req.body.movieName) {
            const movieDetail = await movieSchema.findOne({movieName: req.body.movieName});
            if(movieDetail) {
                return res.json({success: false, message: "Movie name is already exist, choose another!"});
            };
            toUpdate['movieName'] = req.body.movieName
        };
        
        if(req.files) {
            let file = req.files.moviePoster;
            toUpdate['moviePoster'] = 'uploads/moviePoster/' + uuidv4() + path.extname(file.name);
            
            if(!fs.existsSync(`./public/uploads/moviePoster`)) {
                mkdirp.sync('public/uploads/moviePoster');
            };
            
            file.mv(`public/${toUpdate.moviePoster}`, (err) => {
                if(err) return res.send({success:false, message: 'file uploading error'});
    
                console.log('file Uploaded')
            });

            if(movie.moviePoster) {
                if(fs.existsSync(`./public/${movie.moviePoster}`)) {
                    fs.unlinkSync(`./public/${movie.moviePoster}`);
                }
            };
        };

        req.body.movieDescription ? toUpdate['movieDescription'] = req.body.movieDescription : '';

        req.body.releasedDate ? toUpdate['releasedDate'] = req.body.releasedDate : ''; // date
        req.body.rated        ? toUpdate['rated'] = req.body.rated : '';
        req.body.imbd_rating  ? toUpdate['imbd_rating'] = req.body.imbd_rating : ''; // number
    
        req.body.genre        ? toUpdate['genre'] = req.body.genre : ''; // array
        
        req.body.directorName ? toUpdate['directorName'] = req.body.directorName : ''; // array
    
        req.body.writerName   ? toUpdate['writerName'] = req.body.writerName : ''; // array
    
        req.body.actorName    ? toUpdate['actorName'] = req.body.actorName : ''; // array

        movieSchema.findByIdAndUpdate(movieId,{$set: toUpdate},{new:true}).exec()
        .then(mov => {
            res.json({success: true, message: 'Movie updated', data: mov})
        })
        .catch(err => {
            res.json({success: false, message: "Something went wrong", error: err});
        });

    } catch (err) {
        res.json({ success: false, message: "Something went wrong", error: err });
    };
});

// route -> '/api/movie/update/movieDetail/:movieId'
// delete movie
router.delete('/delete/movieDetail/:movieId', async(req, res) => {
    try {
        const movieId = req.params.movieId;

        const movie = await movieSchema.findById(movieId);
        if(!movie) {
            return res.json({success: false, message: `Movie id ${movieId} is not found`});
        };

        movieSchema.findByIdAndDelete(movieId).exec()
        .then(async(mov) => {
            if(mov.moviePoster) {
                if(fs.existsSync(`./public/${mov.moviePoster}`)) {
                    fs.unlinkSync(`./public/${mov.moviePoster}`);
                }
            };
            res.json({success: true, message: 'Movie detail deleted'})
        })
        .catch(err => {
            res.json({success: false, message: "Something went wrong", error: err});
        });

    } catch (err) {
        res.json({ success: false, message: "Something went wrong", error: err });
    };
});

module.exports = router;