const router = require('express').Router()
const Orders = require('../db/models/orders.js')

router.use(withCart);

function withCart(req, res, next) {
    if (req.cart) return next();

    const { cartId } = req.session;
    if (cartId) {
        return Orders.findById(cartId)
            .then(sendCart)
    }

    Orders.create({ user: req.user })//Where does this req.user come from? The session?
        .then(cart => {
            req.session.cartId = cart.id
        })
        .then(sendCart);

    function sendCart(cart) {
        req.cart = cart;
        next();
    }
}

router.get('/', (req, res) => res.send(req.cart))

router.put('/', (req, res, next) => {
    req.cart.addTransactions(req.body)
        .then(() => res.redirect('/api/cart'))
        .catch(next);
})

module.exports = router
