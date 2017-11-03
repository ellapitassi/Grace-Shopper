const router = require('express').Router()
const { Transactions, Teachables } = require('../db/models');
module.exports = router

// Look up .route() in Express docs!
// Even if you're not using .route(), you can get a similar effect by organizing your routes by path first, then function.

//TESTED - WORKING
router.get('/', (req, res, next) => {
  Transactions.findAll({ include: [{ all: true }] })
    .then(transaction => res.json(transaction))
    .catch(next)
})
//TESTED - WORKING
router.post('/', (req, res, next) => {
    //buyer, tutor, cost, sessionTime, duration, rating, comments
  const info = req.body;
  Transactions.create(info,
    {
        include: [{ all: true }]
    }).then(transaction => res.json(transaction))
  .catch(next)
})

//Get All Transactions by a given TeachableId TESTED - WORKING
router.get('/teachable/:teachable/', (req, res, next) => {
  const teachable = req.params.teachable;
  console.log(teachable)
  Transactions.findAll({ where: {teachableId:teachable}},{ include: [{ model: Teachables }] })
    .then(result => res.json(result))
    .catch(next);
})

//TESTED - WORKING
router.get('/:id', (req, res, next) => {
  Transactions.findById(req.params.id)
    .then(transactions => res.json(transactions))
    .catch(next);
})

