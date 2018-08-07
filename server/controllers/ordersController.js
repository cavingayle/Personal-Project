module.exports = {

    addToLineItem: ( req, res ) => {
        const{ orderid, cart }= req.body
        cart.forEach( e => {
        req.app.get( 'db' ).create_line_items( orderid,e.id,e.qty ).then( ( res ) => {
        }).catch( error=>console.log( error ) )
      })   
    },

    allOrdersAdmin:( req, res, next ) =>{
       const dbInstance=req.app.get( 'db' );
    //    console.log( "inside admin get orders" )
       dbInstance.admin_get_orders().then( orders=>res.status( 200 ).send( orders ))
       .catch( error=>console.log( error ) )
    },

    ordersByUserId:( req, res, next )=>{
        const dbInstance = req.app.get( 'db' )
        console.log( "inside order by user id", req.session.user.userid )
        const{ userid } = req.session.user
        dbInstance.order_by_user_id(userid).then(order=>res.status( 200 ).send( order ))
        .catch( error =>console.log( error ) )
    }
}