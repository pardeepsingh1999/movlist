const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const config = require('./config');

//set public folder
app.use(express.static( path.join(__dirname, 'public') ));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express fileUpload middleware //
app.use(fileUpload());


app.get('/', (req, res) => {
    res.send("work '/api'")
});

const indexRouter = require('./routes/indexRouter');

app.use('/api', indexRouter);


mongoose.connect(config.mongodb, config.mongodbOptions)
.then(() => {
    console.log('MongoDb Connected')
    app.listen(config.port, () => {
        console.log(`server is running on http://localhost:${config.port}`)
    });
})
.catch(err => {
    console.log(`MongoDb Connection Error: ${err}`)
})