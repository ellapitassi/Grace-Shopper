'use strict'
var Promise = require("bluebird");
var {
  User,
  Teachables,
  Transactions,
  Orders
} = require('./models');
var db = require('./index');
var data = require('./data');

async function seed () {
  await db.sync({ force: true })
  const users = toObject(await Promise.map(data.user, (data => User.create(data))))
  const teachables = toObject(await Promise.map(data.teachables, (data => Teachables.create(data))))
  const orders = toObject(await Promise.map(data.orders, (data => Orders.create(data))))
  const transactions = toObject(await Promise.map(data.transactions, (data => Transactions.create(data))))
  const {'Annelise Thorsen': Annelise,'Ella Pitassi': Ella, 'Jennifer Neale': Jennifer, 'Guang Zhu': Guang, 'Anule Ndukwu': Anule, 'April Rueb': April, 'Arianna Lanz': Arianna, Ashi, 'Emily Intersimone': EmilyI, 'Blanca Sanchez': Blanca, 'Cara Lang': Cara, 'Caryn McCarthy': Caryn, 'Cecilia Chang': Cecilia, 'Christina Ng': Christina, 'Evlis Henry': Evlis, 'Emily Jordan': EmilyJ, 'Erica Chai': Erica, 'Joyce Ren': Joyce, 'Keri Miller': Keri, 'Layla Hedges': Layla, 'Lina Morales': Lina, 'Maria Betances': Maria, 'Moyouri Bhattacharjee': Momo, 'Renee Sajedian': Renee, 'Samantha Zhang': Sam, 'Shannon Kendall': Shannon, 'Shelby Rackley': Shelby, 'Shiratie Prodhan': Shiratie, 'Priya Vaidyanath': Priya, 'Eleni Arvanitis': Eleni} = users
  const {React, Redux, Express, Sequelize, Crafting, Knitting, Writing, Reading, Numbers, Eating, Gaming, FullStack, ReactRedux, Feminism} = teachables
  return Promise.all([
    Ashi.setTeachables([FullStack, Writing, Feminism])
  , Ella.setTeachables([Express, Eating, Feminism])
  , Annelise.setTeachables([Numbers, Writing, Redux, Feminism])
  , Jennifer.setTeachables([FullStack, Gaming, Feminism])
  , Guang.setTeachables([Express, React, Feminism])
  , Anule.setTeachables([Knitting, React, Sequelize, Feminism])
  , April.setTeachables([Crafting, Writing, ReactRedux, Feminism])
  , Arianna.setTeachables([Reading, React, Feminism])
  , EmilyI.setTeachables([FullStack, Feminism])
  , Blanca.setTeachables([Reading, React, Redux, Feminism])
  , Cara.setTeachables([Reading, Sequelize, Feminism])
  , Caryn.setTeachables([ReactRedux, Knitting, Reading, Feminism])
  , Cecilia.setTeachables([Eating, ReactRedux, Feminism])
  , Christina.setTeachables([Express, Reading, Feminism])
  , Evlis.setTeachables([ReactRedux, Numbers, Feminism])
  , EmilyJ.setTeachables([Express, Writing, Reading, Feminism])
  , Erica.setTeachables([FullStack, Feminism])
  , Joyce.setTeachables([Gaming, Crafting, Express, Feminism])
  , Keri.setTeachables([FullStack, Crafting, Feminism])
  , Layla.setTeachables([Writing, React, Reading, Feminism])
  , Lina.setTeachables([Numbers, FullStack, Feminism])
  , Maria.setTeachables([FullStack, Feminism])
  , Momo.setTeachables([Gaming, Sequelize, Feminism])
  , Renee.setTeachables([Reading, ReactRedux, Feminism])
  , Sam.setTeachables([Redux, Reading, Writing, Feminism])
  , Shannon.setTeachables([React, Redux, Feminism])
  , Shelby.setTeachables([Sequelize, React, Feminism])
  , Shiratie.setTeachables([Sequelize, Reading, Feminism])
  , Priya.setTeachables([FullStack, Feminism])
  , Eleni.setTeachables([React, Redux, Feminism])
  ])
}

Promise.resolve(seed())
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error("There was totally a problem", err, err.stack);
})
.finally(function () {
  db.close();
  console.log("connection closed");
  return null;
});

function toObject (array) {
  return array.reduce(function(all, x){
    all[x.name] = x;
    return all
  }, {})
}
