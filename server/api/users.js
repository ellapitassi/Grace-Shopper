const router = require('express').Router()
const { User, Teachables } = require('../db/models');
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({ include: [{ model: Teachables }] })
    .then(users => res.json(users))
    .catch(next)
})

//Get All users by a given Teachable
router.get('/teachable/:teachable/', (req, res, next) => {
  const teachable = req.params.teachable; //Assuming this is an id number? Also works if stored as string?
  console.log(teachable)
  User.findAll({ include: [{ model: Teachables }] })
    .then(users => {
      var filteredUsers = users.filter(user => 
        console.log(user.getTeachables())
        //(user.getTeachables().indexOf(teachable) != -1) // teachables: [5, 3, 88], so indexOf(3) != -1
      );
      res.json(filteredUsers);
    })
    .catch(next);
}) 

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
})

router.post('/', (req, res, next) => {
  const info = req.body;
  User.create(info,
    { include: [{ model: Teachables, as: "teachables"}]
    }).then(user => res.json(user))
    .catch(next);
  })
