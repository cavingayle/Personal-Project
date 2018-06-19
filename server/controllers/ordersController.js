module.exports ={

    addToLineItem: ( req, res ) => {
        console.log("inside line item endpoint")
        const{ orderid }= req.body
        const{ cart } = req.session.user
    console.log("inside line items,",cart)
        cart.forEach( e => {
        req.app.get( 'db' ).create_line_items( orderid,e.id,e.qty ).then( () => {
            console.log("Added to line item");
        }).catch( error=>console.log( error ) )
      })   
    },

    // allOrdersAdmin:(req,res,next) =>{
    //    const dbInstance=req.app.get( 'db' );
    //    dbInstance.admin_getorders().then( orders=>res.status( 200 ).send( orders ))
    //    .catch(error=>console.log( error ) )
    // },

    ordersByUserId:(req,res,next)=>{
        const dbInstance = req.app.get( 'db' )
        // console.log( "inside order by user id", req.session.user.userid )
        const{ userid } = req.session.user
        dbInstance.order_by_user_id(userid).then(order=>res.status( 200 ).send( order ))
        .catch( error =>console.log( error ) )
    }
}