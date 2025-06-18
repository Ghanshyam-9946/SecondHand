const mongoose = require('mongoose');
function connect(){
    mongoose.connect('mongodb://localhost:27017/sneakz')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
}
module.exports = connect;