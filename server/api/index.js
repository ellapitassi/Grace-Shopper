const router = require('express').Router() 
module.exports = router;

router.use('/cart', require('./cart'))
router.use('/users', require('./users'))
router.use('/transactions', require('./transactions'))
router.use('/teachables', require('./teachables'))
router.use('/orders', require('./orders'))
router.use('/stripe', require('./payment'))



router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
