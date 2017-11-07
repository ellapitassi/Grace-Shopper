const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
 cost: {
     type: Sequelize.FLOAT,
     defaultValue: 0
 }
})

Orders.cartForUser = function (user) {
    if (!user) return Orders.create()
    return Orders.findOrCreate({where: {userId: user.id}},{ include: [{all: true}]})
            .then(([cart, _]) => cart)
}

module.exports = Orders
