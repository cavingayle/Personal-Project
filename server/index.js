require( "dotenv" ).config()
const express = require( "express" )
const bodyParser = require( "body-parser" )
const session = require( "express-session" )
const massive = require( "massive" )
const cartController = require("./controllers/cartController");
const orderController = require( "./controllers/ordersController" );
const productController = require( "./controllers/productController" );
const userController = require( "./controllers/userController" );
const sessionController = require( "./controllers/sessionController" );

const app = express()
app.use( bodyParser.json() )
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
)
massive( process.env.CONNECTION_STRING )
  .then( db => {
    app.set( "db", db )
  })
  .catch( err => console.log( "error", err ))

//***********PRODUCT Endpoints *************/
app.get("/api/category", productController.getCategoryData)
app.get("/api/shop", productController.getProducts) 
app.delete("/api/shop/:id", productController.deleteProduct) 
app.put("/api/shop/:id", productController.updateProduct) 
app.post("/api/shop", productController.createProduct)

//************User Endpoints ***************************/
// app.get('api/register', userController.createUser)
app.get('/api/users', userController.getUsers) //for admin page to get all users 
app.get('/api/user/:id', userController.getUserByID) 
app.get('/api/userdetails', userController.userdetailsByID) 
app.get('/api/orders', userController.orderByUserId)

//***************ORDER Endpoints *********************/
app.post('/api/lineitem/', orderController.addToLineItem) 

//*************Cloudinary Image uploader  */
app.get('/api/upload', productController.imageUpload);

//*************Admin Endpoints************ */
app.get('/api/allOrders', orderController.allOrdersAdmin)


const port = 9000
app.listen( port, () => {
  console.log( `This server is over ${ port }!!!` )
})