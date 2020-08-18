
let data = [
    {
        movieName: 'The Godfather',
        movieDescription: "An everyday story of Mafia folk, incorporating a severed horse's head in the bed and a number of heartwarming family occasions, as well as pointers on how not to behave in your local trattoria (i.e. blasting the brains of your co-diners out all over their fettuccini).",
        releasedDate: '14 March 1972', // date
        rated: 'r',
        imbd_rating: 9.2, // number
        genre: ['Drama'],
        directorName: ['Francis Ford Coppola'],
        writerName: ['Mario Puzo', 'Francis Ford Coppola'],
        actorName: ['Richard Castellano','Robert Duvall','Marlon Brando','John Cazale','Diane Keaton']
    },{
        movieName: 'Upgrade',
        movieDescription: 'Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant.',
        releasedDate: '1 June 2018', // date
        rated: 'r',
        imbd_rating: 7.5, // number
        genre: ['Action', 'Sci-Fi', 'Thriller'],
        directorName: ['Leigh Whannell'],
        writerName: ['Leigh Whannell'],
        actorName: [ 'Logan Marshall-Green',' Melanie Vallejo', 'Steve Danielsen']
    },{
        movieName: 'Avengers: Infinity War',
        movieDescription: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        releasedDate: ' 27 April 2018', // date
        rated: 'pg-13',
        imbd_rating: 8.4, // number
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        directorName: ['Anthony Russo', 'Joe Russo'],
        writerName: ['Christopher Markus', 'Stephen McFeely' ],
        actorName: ['Robert Downey Jr.', 'Chris Hemsworth','Mark Ruffalo', 'Chris Evans']
    },{
        movieName: 'Spider-Man: Into the Spider-Verse',
        movieDescription: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
        releasedDate: '14 December 2018', // date
        rated: 'pg',
        imbd_rating: 8.4, // number
        genre: ['Animation', 'Action', 'Adventure'],
        directorName: ['Bob Persichetti', 'Peter Ramsey', 'Rodney Rothman'],
        writerName: [' Phil Lord', 'Rodney Rothman'],
        actorName: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld', 'Mahershala Ali']
    },{
        movieName: 'Aquaman',
        movieDescription: 'Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.',
        releasedDate: '21 December 2018', // date
        rated: 'pg-13',
        imbd_rating: 7, // number
        genre: [ 'Action', 'Adventure', 'Fantasy'],
        directorName: ['James Wan'],
        writerName: [ 'David Leslie' , 'Will Beall'],
        actorName: ['Jason Momoa', 'Amber Heard','Willem Dafoe', 'Patrick Wilson']
    },{
        movieName: 'Black Panther',
        movieDescription: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
        releasedDate: '16 February 2018', // date
        rated: 'pg-13',
        imbd_rating: 7.3, // number
        genre: ["Action", "Adventure", "Sci-Fi"],
        directorName: ["Ryan Coogler"],
        writerName: ['Ryan Coogler', 'Joe Robert Cole'],
        actorName: ['Chadwick Boseman', 'Michael B. Jordan', "Lupita Nyong'o, Danai Gurira"]
    },{
        movieName: 'The Godfather',
        movieDescription: "An everyday story of Mafia folk, incorporating a severed horse's head in the bed and a number of heartwarming family occasions, as well as pointers on how not to behave in your local trattoria (i.e. blasting the brains of your co-diners out all over their fettuccini).",
        releasedDate: '14 March 1972', // date
        rated: 'r',
        imbd_rating: 9.2, // number
        genre: ['Drama'],
        directorName: ['Francis Ford Coppola'],
        writerName: ['Mario Puzo', 'Francis Ford Coppola'],
        actorName: ['Richard Castellano','Robert Duvall','Marlon Brando','John Cazale','Diane Keaton']
    },{
        movieName: 'Upgrade',
        movieDescription: 'Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant.',
        releasedDate: '1 June 2018', // date
        rated: 'r',
        imbd_rating: 7.5, // number
        genre: ['Action', 'Sci-Fi', 'Thriller'],
        directorName: ['Leigh Whannell'],
        writerName: ['Leigh Whannell'],
        actorName: [ 'Logan Marshall-Green',' Melanie Vallejo', 'Steve Danielsen']
    },{
        movieName: 'Avengers: Infinity War',
        movieDescription: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        releasedDate: ' 27 April 2018', // date
        rated: 'pg-13',
        imbd_rating: 8.4, // number
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        directorName: ['Anthony Russo', 'Joe Russo'],
        writerName: ['Christopher Markus', 'Stephen McFeely' ],
        actorName: ['Robert Downey Jr.', 'Chris Hemsworth','Mark Ruffalo', 'Chris Evans']
    },{
        movieName: 'Spider-Man: Into the Spider-Verse',
        movieDescription: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
        releasedDate: '14 December 2018', // date
        rated: 'pg',
        imbd_rating: 8.4, // number
        genre: ['Animation', 'Action', 'Adventure'],
        directorName: ['Bob Persichetti', 'Peter Ramsey', 'Rodney Rothman'],
        writerName: [' Phil Lord', 'Rodney Rothman'],
        actorName: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld', 'Mahershala Ali']
    },{
        movieName: 'Aquaman',
        movieDescription: 'Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.',
        releasedDate: '21 December 2018', // date
        rated: 'pg-13',
        imbd_rating: 7, // number
        genre: [ 'Action', 'Adventure', 'Fantasy'],
        directorName: ['James Wan'],
        writerName: [ 'David Leslie' , 'Will Beall'],
        actorName: ['Jason Momoa', 'Amber Heard','Willem Dafoe', 'Patrick Wilson']
    },{
        movieName: 'Black Panther',
        movieDescription: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
        releasedDate: '16 February 2018', // date
        rated: 'pg-13',
        imbd_rating: 7.3, // number
        genre: ["Action", "Adventure", "Sci-Fi"],
        directorName: ["Ryan Coogler"],
        writerName: ['Ryan Coogler', 'Joe Robert Cole'],
        actorName: ['Chadwick Boseman', 'Michael B. Jordan', "Lupita Nyong'o, Danai Gurira"]
    }
]