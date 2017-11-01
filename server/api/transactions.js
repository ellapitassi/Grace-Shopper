const router = require('express').Router()
const { Transactions } = require('../db/models');
module.exports = router

//TESTED - WORKING
router.get('/', (req, res, next) => {
  Transactions.findAll({ include: [{ all: true }] })
    .then(transaction => res.json(transaction))
    .catch(next)
})

//Get All Transactions by a given Teachable
router.get('/teachable/:teachable/', (req, res, next) => {
  const teachable = req.params.teachable; //Assuming this is an id number? Also works if stored as string?
  Transactions.findAll({ include: [{ all: true }] })
    .then(transactions => {
      var filteredTransactions = Transactions.filter(transaction => 
        (transaction.getTeachables().indexOf(teachable) != -1) // teachables: [5, 3, 88], so indexOf(3) != -1 //TODO: check the table 
      );
      res.json(filteredTransactions);
    })
    .catch(next);
})

//TESTED - WORKING
router.get('/:id', (req, res, next) => {
  Transactions.findById(req.params.id)
    .then(transactions => res.json(transactions))
    .catch(next);
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
