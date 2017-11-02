const router = require('express').Router()
const { Orders } = require('../db/models');
module.exports = router

//TESTED - WORKING
router.get('/', (req, res, next) => {
  Orders.findAll({ include: [{ all: true }] })
    .then(orders => res.json(orders))
    .catch(next)
})

//TESTED - WORKING
router.get('/:id', (req, res, next) => {
  Orders.findById(req.params.id)
    .then(order => res.json(order))
    .catch(next);
})

//TESTED - WORKING
router.post('/', (req, res, next) => {
    //buyer, tutor, cost, sessionTime, duration, rating, comments
  const info = req.body;
  Order.create(info,
    {
        include: [{ all: true }]
    }).then(order => res.json(order))
  .catch(next)
})