const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 6969;
const dbuser = 'user';
const dbpassword = 'password';
const analytics = 'sample_analytics';
var mongoUrl = `mongodb+srv://${dbuser}:${dbpassword}@aws-mongodb-cluster0-lvdqf.mongodb.net/${analytics}?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var AccountsSchema = new mongoose.Schema({
  account_id: Number,
  limit: Number,
  products: Array,
});

var AccountsModel = db.model('accounts', AccountsSchema);

app.listen(port, () => {
  console.log('listen port 6969');
});

app.get('/hello_world', (req, res) => {
  res.send('yametekudasai neechan');
  console.log('called hello world at this time: ' + new Date());
  var accountsModel = new AccountsModel();
  accountsModel.account_id = 10;
  accountsModel.limit = 6969;
  accountsModel.products = ['testProd1', 'testProd2'];
  accountsModel.save();
});
