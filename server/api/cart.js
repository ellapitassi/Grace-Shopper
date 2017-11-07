const router = require('express').Router()
const Orders = require('../db/models/orders.js')

router.use(withCart);

function withCart(req, res, next) {
    if (req.cart) return next();
    //return Orders.findById(1,{ include: [{all: true, include: [{all: true}]}]}).then(sendCart).catch(next);
    const { cartId } = req.session;
    if (cartId) {
        console.log("cartId", cartId);
        return Orders.findById(cartId, 
             {include: [{all: true, 
                include: [{all:true}]
            }]
        })
            .then(sendCart)
            .catch(() => {
                console.error("500: Couldn't find id which was on session: ",cartId)
                next()})
    }
    else{
        console.log("req.user",req.user)
    return Orders.cartForUser(req.user)
        .then(sendCart)
        .catch(next)
    }
    // Orders.create({ user: req.user })//Where does this req.user come from? The session?
    //     .then(cart => {
    //         req.session.cartId = cart.id
    //     })
    //     .then(sendCart);

    function sendCart(cart) {
        req.session.cartId = cart.id;
        console.log("req.session.cartId", req.session.cartId)
        console.log("cart.id", cart.id)
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
