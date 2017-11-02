const router = require('express').Router()
const { User, Teachables } = require('../db/models');
module.exports = router

//TESTED - WORKING
router.get('/', (req, res, next) => {
  User.findAll({ include: [{ model: Teachables }] })
    .then(users => res.json(users))
    .catch(next)
})

//Get All users by a given TeachableId TESTED - WORKING
router.get('/teachable/:teachable/', (req, res, next) => {
  const teachable = req.params.teachable;

  Teachables.findOne({ where: {id: teachable}},{ include: [{ model: User }] })
    .then(teachable => {
      return teachable.getUsers();
    })
    .then(result => res.json(result))
    .catch(next);
})

//TESTED - WORKING
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
})

//TESTED - WORKING
router.post('/', (req, res, next) => {
  const info = req.body;
  User.create(info,
    { include: [{ model: Teachables, as: "teachables"}]
    }).then(user => res.json(user))
    .catch(next);
})