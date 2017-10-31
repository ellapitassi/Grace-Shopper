const router = require('express').Router()
const { Teachables } = require('../db/models');
module.exports = router

router.get('/', (req, res, next) => {
  Teachables.findAll({ include: [{ all: true }] })
    .then(teachables => res.status(200).json(teachables))
    .catch(next)
})