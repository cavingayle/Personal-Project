// module.exports = {
//     cartToRedux: ( req, res ) => {
//       // console.log('---cartToRedux-----req.body----', req.body)
//       req.session.user.cart[0] ? 
//       res.status( 201 ).send(req.session.user.cart) : res.status( 404 ).send("No current Cart in Session")
//     },

//     cartToSession: ( req, res ) => {
//     //   console.log('-----cartToSession-----req.body--', req.body)
//     //   console.log('-----req.session.user.cart----', req.session.user.cart)
//       req.session.user.cart = req.body
//       // console.log(req.session.user)
//       res.end()
//     },

//     sessionLocation: ( req, res, next ) => {
//       req.session.user.lastLocation = req.body.local
//     //   console.log('test location', req.body)
//     //   console.log('where to reroute? :', req.session.user.lastLocation)
//       next()
//     },

//     getUser: ( req, res ) => {
//     //   console.log(req.session.user)
//       res.status(200).send(req.session.user)
//     },
//     getUsers: ( req, res, next ) => {
//         const dbInstance = req.app.get( 'db' );
//         // console.log( 'received request' )
//         dbInstance.getUsers().then( users=> res.status( 200 ).send( users ))
//         .catch( error => console.log( error ));
//     },
//     getUserByID: ( req, res ) =>{
//         const dbInstance = req.app.get( 'db' );
//         // console.log( 'received request', req.params )
//         const userId = req.params.id;
        
//         dbInstance.getUserByID( userId ).then( user => res.status( 200 ).send( user ) )
//         .catch( error => console.log( error ) );
//     },

//     userdetailsByID: ( req, res ) => {
//         const dbInstance = req.app.get( 'db' );
//         const{ userid } = req.session.user
//         dbInstance.getUserByID( userid ).then( user => res.status( 200 ).send( user ) )
//         .catch( error => console.log( error ) );
//     },


//     updateUserProfile:( req, res ) => {
//         // console.log("inside udate profile server side")
//         const dbInstance = req.app.get( 'db' );
//         const{ userid } = req.session.user
//         // console.log(req.body)
//         // const userid=13
//         const { address, city, state, zip_code, phone } = req.body;

//         dbInstance.updateUserProfile( userid, address, city, state, zip_code, phone ).then( user => res.status( 200 ).send( user ) )
//         .catch( error => console.log( error ) );
//     },

//     checkSession:( req, res )=>{
//         res.status( 200 ).send( req.session );
//     }
// }