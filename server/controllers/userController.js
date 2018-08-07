module.exports = {
    cartToRedux: ( req, res ) => {
      req.session.user.cart[0] ? 
      res.status( 201 ).send(req.session.user.cart) : res.status( 404 ).send("No current Cart in Session")
    },

    cartToSession: ( req, res ) => {

      req.session.user.cart = req.body
      res.end()
    },

    sessionLocation: ( req, res, next ) => {
      req.session.user.lastLocation = req.body.local
      next()
    },

    getUser: ( req, res ) => {
      res.status(200).send(req.session.user)
    },
    getUserByID: ( req, res ) =>{
        const dbInstance = req.app.get( 'db' );
        const userId = req.params.id;
        dbInstance.get_user( userId ).then( user => res.status( 200 ).send( user ) )
        .catch( error => console.log( error ) );
    },

    userdetailsByID: ( req, res ) => {
        const dbInstance = req.app.get( 'db' );
        const{ userid } = req.session.user
        dbInstance.get_user( userid ).then( user => res.status( 200 ).send( user ) )
        .catch( error => console.log( error ) );
    },


    // updateUserProfile:( req, res ) => {
    //     // console.log("inside udate profile server side")
    //     const dbInstance = req.app.get( 'db' );
    //     const{ userid } = req.session.user
    //     // console.log(req.body)
    //     // const userid=13
    //     const { address, city, state, zip_code, phone } = req.body;

    //     dbInstance.updateUserProfile( userid, address, city, state, zip_code, phone ).then( user => res.status( 200 ).send( user ) )
    //     .catch( error => console.log( error ) );
    // },

    checkSession:( req, res )=>{
        res.status( 200 ).send( req.session );
    }
}