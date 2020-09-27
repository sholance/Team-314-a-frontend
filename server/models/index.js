const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const mongodb_URL = process.env.DATABASE;
mongoose.set('useCreateIndex', true);
mongoose.connect(mongodb_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', ()=> {
    console.log('Mongoose ti wa online!!!!')
});

module.exports.User = require('./user');
module.exports.Poll = require('./poll');