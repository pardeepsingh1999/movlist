const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    moviePoster: {
        type: String
    },

    releasedDate: {
        type: Date
    },

    rated: {
        type: String,
        lowercase: true
    },

    imbd_rating: {
        type: Number
    },

    genre: [
        {
            type: String,
            lowercase: true
        }
    ],
    
    directorName: [
        {
            type: String,
            lowercase: true
        }
    ],

    writerName: [
        {
            type: String,
            lowercase: true
        }
    ],

    actorName: [
        {
            type: String,
            lowercase: true
        }
    ]

},{
    timestamps: true
});

module.exports = mongoose.model('movie', movieSchema);