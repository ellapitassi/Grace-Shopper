const Sequelize = require('sequelize')
const db = require('../db')

const Teachables = db.define('teachables', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Teachables
