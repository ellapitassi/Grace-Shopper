const router = require('express').Router()
const { User, Teachable } = require('../db/models');
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({ include: [{ model: Teachable }] })
    .then(users => res.status(200).json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(next);
})

router.get('/:teachable/', (req, res, next) => {
  const teachable = req.params.teachable; //Assuming this is an id number? Also works if stored as string?
  User.findAll({ include: [{ model: Teachable }] })
    .then(users => {
      var filteredUsers = users.filter(user => {
        user.getTeachables().indexOf(teachable) != -1; // teachables: [5, 3, 88], so indexOf(3) != -1
      });
      res.status(200).json(filteredUsers);
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
  const info = req.body;
  User.create({
    name: info.name,
    email: info.email,
    teachables: info.teachables //Make sure to send as array of objects in body
  },
    { include: [{ model: Teachable, as: "teachables"}]
    })
  })
})
