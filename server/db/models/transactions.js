const Sequelize = require('sequelize')
const db = require('../db')
const Teachables = require('./teachables')
const Orders = require('./orders')

const Transactions = db.define('transactions', {
  cost: {
      type: Sequelize.FLOAT
  },
  sessionTime: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  },
  duration: {
      type: Sequelize.FLOAT,
      defaultValue: 1
  },
  rating: Sequelize.INTEGER,
  comments: Sequelize.TEXT
})

Transactions.addHook('beforeSave', 'generateCost', (transaction) =>
{
  //console.log("transaction", transaction);
  Teachables.findById(transaction.teachableId, { include: [{ all: true }] })
    .then(res => {
      //console.log("res===>", res)
      let pr = res.price;
      transaction.cost = pr * transaction.duration;
      return Orders.findById(transaction.orderId)
        .then(foundOrder => {
          foundOrder.update({ subtotal: foundOrder.subtotal + transaction.cost });
        })
    })
})


module.exports = Transactions
