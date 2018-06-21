require( "dotenv" ).config();
const express = require( "express" );
const bodyParser = require( "body-parser" );
const session = require( "express-session" );
const massive = require( "massive" );
const path = require( "path" );
const exphbs = require( "express-handlebars" );
const cartController = require("./controllers/cartController");
const orderController = require( "./controllers/ordersController" );
const productController = require( "./controllers/productController" );
const userController = require( "./controllers/userController" );
const sessionController = require( "./controllers/sessionController" );
const paymentController = require( "./controllers/paymentController" );
const authController = require( "./controllers/authController" );
const mailController = require( "./controllers/mailController");

const app = express()

// Static folder
app.use(express.static(path.join(__dirname, '../build')));

// View engine setup
app.engine( 'handlebars', exphbs());
app.set('view evgine', 'handlebars');

// Body Parser Middleware
// Parse app/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false}));
// Parse app/json
app.use( bodyParser.json() );

// Sessions
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

app.use( sessionController )

massive( process.env.CONNECTION_STRING )
  .then( db => {
    app.set( "db", db )
  })
  .catch( err => console.log( "error", err ))

//***********PRODUCT Endpoints *************/
// app.get("/api/category", productController.getCategoryData)
app.get("/api/shop", productController.getProducts)
// app.get("/api/product/:id", productController.getProduct) 
app.delete("/api/shop/:id", productController.deleteProduct) 
// app.put("/api/shop/:id", productController.updateProduct) 
app.put("/api/shop/:id", productController.editProduct) 
app.post("/api/createProduct", productController.createProduct)
// app.get("/api/itemOptions", productController.itemOptions) 
// app.get("/api/optionByProductID/:id", productController.optionByProductID)
// app.get("/api/test", productController.getNecklaceSizes)

//*************USER login/logout Endpoints**************/
app.get("/auth/callback", authController.auth) 
app.post("/api/logout", authController.logout)
app.get("/api/user-data", userController.getUser)
app.post("/api/cartToSession", userController.cartToSession)
app.post('/api/sessionLocation', userController.sessionLocation)
app.get('/api/cartToRedux', userController.cartToRedux)
// app.post('/api/updateuserProfile', userController.updateUserProfile)

// //************User Endpoints ***************************/
// app.get('api/register', userController.createUser)
// app.get('/api/users', userController.getUsers) //for admin page to get all users 
app.get('/api/user/:id', userController.getUserByID) 
app.get('/api/userdetails', userController.userdetailsByID) 
app.get('/api/orders', orderController.ordersByUserId)

//***************Payment****************** */
app.post('/api/payment',paymentController.paymentAPI)
app.post('/api/shippingDetails',paymentController.shippingDetails)
app.get('/api/checksession',userController.checkSession)

// //***************ORDER Endpoints *********************/
app.post('/api/lineitem/', orderController.addToLineItem) 

// //*************Cloudinary Image uploader  */
app.get('/api/upload', productController.imageUpload);

// //*************Admin Endpoints************ */
app.get('/api/allOrders', orderController.allOrdersAdmin)

// Contact Email Setup
app.post('/api/sendmail', mailController.sendMail);

// Hosting Setup
app.get( '*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = 9001
app.listen( port, () => {
  console.log( `This server is over ${ port }!!!` )
})