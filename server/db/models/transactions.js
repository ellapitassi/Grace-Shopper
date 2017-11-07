const Sequelize = require('sequelize')
const db = require('../db')
const Teachables = require('./teachables')

const Transactions = db.define('transactions', {
  cost: {
      type: Sequelize.FLOAT //TODO: Change Decimals to floats of pennies; better for math
  },
  sessionTime: {
    type: Sequelize.DATE
  },
  duration: {
      type: Sequelize.FLOAT,
      defaultValue: 1
  },
  rating: Sequelize.INTEGER,
  comments: Sequelize.TEXT
})

Transactions.addHook('beforeSave', 'generateCost', (transaction) =>
  Teachables.findById(transaction.teachableId)
  .then(res => {
    let pr = res.price;
    transaction.cost = pr * transaction.duration;
}))


module.exports = Transactions
