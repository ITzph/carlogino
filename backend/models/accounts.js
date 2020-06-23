const { db } = require('./../database/sample-analytics');

const AccountsModel = db.model('accounts', {
  account_id: Number,
  limit: Number,
  products: Array,
});

module.exports = {
  AccountsModel,
};
