const newLocal = 'dotenv';
require(newLocal).config();

const config = {
    port: 3000 || process.env.port,
    mongodbOptions: {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
};

const production = {
    mongodb: 'mongodb+srv://movlist:movielist123@cluster0.whcvf.mongodb.net/test'
};

const development = {
    mongodb: 'mongodb://localhost:27017/movlist'
};
  
let environment = process.env.NODE_ENV || 'development';

console.log(`Loaded Configs: ${environment}`);

module.exports = Object.assign(config, eval(environment));
  