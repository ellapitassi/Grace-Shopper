const router = require('express').Router()
const { User, Teachables } = require('../db/models');
module.exports = router

//TESTED - WORKING
router.get('/', (req, res, next) => {
  User.findAll({ include: [{ model: Teachables }] })
    .then(users => res.json(users))
    .catch(next)
})

//(Asked Emily for help)
//getTeachables returns a Promise, so have to refactor to .then off each getTeachables (here and in transactions routes)
//Get All users by a given Teachable
router.get('/teachable/:teachable/', (req, res, next) => {
  const teachable = req.params.teachable; //Assuming this is an id number? Also works if stored as string?
  console.log(teachable)
  User.findAll({ include: [{ model: Teachables }] })
    .then(users => {
      var filteredUsers = users.filter(user => 
        (user.getTeachables().indexOf(teachable) != -1) // teachables: [5, 3, 88], so indexOf(3) != -1
      );
      users[1].getTeachables()
      .then(result => res.json(result))
      // res.json();
    })
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


  // users[1].getTeachables()
  // .then(result => res.json(result))