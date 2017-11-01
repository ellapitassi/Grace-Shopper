const User = require('./user')
const Teachables = require('./teachables')
const Transactions = require('./transactions')

//Associations
Teachables.belongsToMany(User, {through: 'userTeachables'} )
User.belongsToMany(Teachables, {through: 'userTeachables'} )
Transactions.belongsTo(User, {as: 'buyer'} )
Transactions.belongsTo(User, {as: 'tutor'} )
Transactions.hasOne(Teachables)

module.exports = {
  User,
  Teachables,
  Transactions
}
