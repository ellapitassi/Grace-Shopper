const User = require('./user')
const Teachables = require('./teachables')
const Transactions = require('./transactions')

//Associations
Teachables.belongsToMany(User, {through: 'userTeachables'} )
User.belongsToMany(Teachables, {through: 'userTeachables'} )
Transactions.belongsTo(User, {as: 'buyer'} )
Transactions.belongsTo(User, {as: 'tutor'} )
Transactions.belongsTo(Teachables) 
Transactions.belongsToMany(Teachables, {through: 'transactionTeachables'})

module.exports = {
  User,
  Teachables,
  Transactions
}
