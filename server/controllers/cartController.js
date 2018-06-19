// module.exports ={

//     addToCart: ( req, res, next ) => {
//         const db = req.app.get( "db" );
    
//         db.all_products().then( products => res.status( 200 ).send( products) )
//           .catch( error =>
//             res.status(500).send(error, "An unknown error occured when adding product")
//           );
//       },
//     deleteProduct: ( req, res, next ) => {
//         const db = req.app.get( "db" );
//         const { params } = req;
    
//         db.delete_product( [params.id] ).then( products => res.status( 200 ).send( products ) ).catch( error =>
//             res.status( 500 ).send( error, "An unknown error occured when deleting product" )
//           );
//       },

//     updateProduct: ( req, res, next ) => {
//         const db = req.app.get( "db" );
//         const { params, body } = req;
//         // console.log(body);
//         db.update_product([
//             params.id,
//             body.image1,
//             body.name,
//             body.price,
//             body.description,
//             body.stock
//           ]).then(products => res.status( 200 ).send( products ) ).catch(error =>
//             res.status( 500 ).send( error, "An unknown error occured when updating product" )
//           );
//       }
//     }