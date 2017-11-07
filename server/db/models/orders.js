const Sequelize = require('sequelize')
const db = require('../db')
const Transactions = require('./transactions')

const Orders = db.define('orders', {
 subtotal: {
     type: Sequelize.FLOAT,
     defaultValue: 0
 },
 taxes: {
    type: Sequelize.VIRTUAL,
    get() {
        return this.get('subtotal') * 0.07;
    }
},
grandTotal: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    set() {
        this.setDataValue('grandTotal', this.get('subtotal') + this.get('taxes') + 5)//$5 for shipping
    }
}
})

Orders.cartForUser = function (user) {
    if (!user) return Orders.create()
    return Orders.findOrCreate({where: {userId: user.id}},{ include: [{all: true}]})
            .then(([cart, _]) => cart)
}

Orders.addHook('beforeSave', 'generateSubtotal', (order) =>
    Transactions.findAll( {where: {orderId: order.id}} )
.then(res => {
    order.subtotal = res.length > 0 ? res.reduce((sum, transaction) => sum + transaction.cost) : 0;
}))

module.exports = Orders
