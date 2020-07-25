const express = require('express');

const app = express();

const port = 6969;
app.listen(port, () => {
  console.log('listen port 6969');
});

app.get('/hello_world', (req, res) => {
  res.send('yametekudasai neechan');
});
