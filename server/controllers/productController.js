// const cloudinary = require( 'cloudinary' );
module.exports ={

    // imageUpload: ( req, res ) => {
    //     console.log("Inside server side")
    //     const timestamp = Math.round( ( new Date() ).getTime() / 1000 );
    //     const api_secret = process.env.CLOUDINARY_SECRET_API;
    //     const signature = cloudinary.utils.api_sign_request( { timestamp: timestamp }, api_secret );
    //     const payload = {
    //         signature: signature,
    //         timestamp: timestamp
    //     };
    //     // console.log("payload is ", payload)
    //     res.json( payload );
    
    // },
    createProduct:( req, res, next ) => {
        const dbInstance = req.app.get( 'db' )
        const { productname, productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory } = req.body;
        dbInstance.create_product( productname, productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory )
        .then( products =>res.status( 200 ).send( products ) )
        .catch( error =>console.log( error ) )
    },
    
    
    getProducts:( req, res, next ) => {
        const dbInstance = req.app.get( 'db' )
        dbInstance.all_products().then( products =>res.status( 200 ).send( products ))
        .catch( error =>console.log( error ) )
    },

    // optionByProductID:( req, res, next ) => {
    //     const dbInstance = req.app.get( 'db' )
    //     // console.log(req.params);
    //     const id = req.params.id;
    //     dbInstance.optionByProductID( [id] ).then( products =>res.status( 200 ).send( products ))
    //     .catch( error =>console.log( error ) )
    // },

    // itemOptions:( req, res, next ) => {
    //     const dbInstance = req.app.get( 'db' )
    //     dbInstance.itemOption().then(options =>res.status( 200 ).send(options))
    //     .catch( error =>console.log(error))
    // },

    // getCategoryData:( req, res, next ) => {
    //     const dbInstance = req.app.get( 'db' )
    //     dbInstance.item_by_category().then( products =>res.status( 200 ).send( products ))
    //     .catch( error =>console.log( error ) )
    // },

    deleteProduct:( req, res, next ) => {
        const dbInstance = req.app.get( 'db' )
        // console.log("parameters are",req.params);
        const productId=req.params.id;
        console.log(productId)
        dbInstance.delete_product( productId ).then( products =>res.status( 200 ).send( products ) )
        .catch( error =>console.log( error ) )
    },

    // updateProduct:( req, res, next ) => {
    //     const dbInstance = req.app.get( 'db' )
    //     const { params,query } = req;
    // //    console.log("params are", params)
    //     const { productprice, productname, productstock } = req.body;

    // //    console.log(productprice,productname,productstock);
    //     dbInstance.updateProduct( params.id, productprice, productname, productstock ).then( updatedProduct => res.status( 200 ).send( updatedProduct ) )
    //     .catch( error =>console.log( error ) )
    // },

    getProduct:( req, res, next ) => {
        const dbInstance = req.app.get( 'db' )
        const productId=req.params.id
        dbInstance.get_product_by_id( productId ).then( product => res.status( 200 ).send( product ) )
        .catch( error =>console.log( error ) )
    },

    // getNecklaceSizes:( req, res, next ) => {
    //     const dbInstance = req.app.get( 'db' )
    //     dbInstance.get_necklace_sizes().then( products =>res.status( 200 ).send( products ))
    //     .catch( error =>console.log( error ) )
    // }

    editProduct:( req, res, next ) => {
        const dbInstance = req.app.get( 'db' )
        const productId = req.params.id
        const { productname, productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory } = req.body;
        console.log( 'req.body', req.body, 'productId', productId )
        
        dbInstance.update_product( productId, productname, productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory ).then( product => res.status( 200 ).end() )
        .catch( error => console.log( error ) )
    }
}