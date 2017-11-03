const Sequelize = require('sequelize')
const db = require('../db')

const Transactions = db.define('transactions', {
  cost: {
      type: Sequelize.DECIMAL
  },
  sessionTime: {
    type: Sequelize.DATE
  },
  duration: {
      type: Sequelize.DECIMAL
  },
  rating: Sequelize.INTEGER,
  comments: Sequelize.TEXT
})

module.exports = Transactions
