const router = require('express').Router()
const { User, Teachables, userTeachables } = require('../db/models');
module.exports = router

//TESTED - WORKING
router.get('/', (req, res, next) => {
  console.log("REQUEST FROM THE STORE")
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
  User.findOne({ where: {id: req.params.id}})
    .then(user => {
      return user.getTeachables()
      .then(teachables => res.json({ tutor: user, teachables}))
    .catch(next);
})
})

//TESTED - WORKING
router.post('/', (req, res, next) => {
  const info = req.body;
  User.create(info,
    { include: [{ model: Teachables, as: "teachables"}]
    }).then(user => res.json(user))
    .catch(next);
})
