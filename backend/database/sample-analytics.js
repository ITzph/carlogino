const mongoose = require('mongoose');

const USERNAME = 'user';
const PASSWORD = 'pass';
const DB_NAME = 'sample_analytics';

var mongoUrl = `mongodb+srv://${USERNAME}:${PASSWORD}@aws-mongodb-cluster0-lvdqf.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
  db,
};
