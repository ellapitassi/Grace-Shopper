const User = require('./user')
const Teachables = require('./teachables')
const Transactions = require('./transactions')
const Orders = require('./orders')

//Associations
Teachables.belongsToMany(User, {through: 'userTeachables'} )
User.belongsToMany(Teachables, {through: 'userTeachables'} )
Orders.belongsTo(User, {as: 'buyer'} )
Transactions.belongsTo(User, {as: 'tutor'} )
Transactions.belongsTo(Teachables) 
Transactions.belongsTo(Orders)
Orders.hasMany(Transactions)

module.exports = {
  User,
  Teachables,
  Transactions,
  Orders
}
