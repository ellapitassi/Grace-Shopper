const User = require('./user')
const Teachables = require('./teachables')
const Transactions = require('./transactions')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

//Associations
Teachables.belongsToMany(User, {through: 'userTeachables'} ) //export to then seed from?
User.belongsToMany(Teachables, {through: 'userTeachables'} )
Transactions.hasOne(User, {as: 'buyer'} )
Transactions.hasOne(User, {as: 'tutor'} )
Transactions.hasOne(Teachables)

module.exports = {
  User,
  Teachables,
  Transactions
}

