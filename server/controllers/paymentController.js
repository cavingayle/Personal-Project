require( 'dotenv' ).config()
const axios = require( 'axios' )
const stripe = require( 'stripe' )( process.env.STRIPE_SECRETKEY )


module.exports = {

    shippingDetails: ( req, res ) => {
        req.session.shippingDetails = req.body;
        res.send( "Okay" )
    },

    paymentAPI( req, res ) {
        const { source, currency, amount, acct, address, email, tax } = req.body

        stripe.charges.create({ source, currency, amount }, { stripe_account: acct }, ( stripeErr, stripeRes ) => {
            if ( stripeErr ) {
                res.status( 500 ).send({ error: stripeErr })
            } else {
                const { email,address,zip_code, state, city, phone } = req.session.shippingDetails
                const{ userid } = req.session.user
                const amount=( req.body.amount/100 )
                const shippingcharges = 5
                // console.log(amount)
                const{ id } = req.session.user
                const{ cart }=req.session.user.cart
                const date = new Date().toDateString()
                
                    req.app.get( 'db' ).create_order([userid,amount,address,city,state,zip_code,phone,shippingcharges,tax,email,date]).then(orders => {
                        res.status( 200 ).send( orders )
                        console.log( 'orders', orders );
                    }).catch( error => {
                        console.log( "post orders controller error", error )
                    })
            }
        })
    }
}