const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
 cost: Sequelize.DECIMAL
})

module.exports = Orders
