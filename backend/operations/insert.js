const { AccountsModel } = require('./../models/accounts');

const insert = (req, res) => {
  var model = new AccountsModel();
  model.account_id = req.body.account_id;
  model.limit = req.body.limit;
  model.products = ['testProd1', 'testProd2'];
  model.save();
  res.send('inserted account with id: ' + model.account_id);
};

module.exports = {
  insert,
};
