const express = require('express');
const bodyParser = require('body-parser');
const { AccountsModel } = require('./models/accounts');
const { insert } = require('./operations/insert');

const app = express();
const PORT = 6969;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log('listening to ' + PORT);
});

app.get('/hello_world', (req, res) => {
  res.send('yametekudasai neechan');
  console.log('called hello world at this time: ' + new Date());
});

app.post('/insert-account', insert, (req, res) => {
  console.log('called insert-account');
});
