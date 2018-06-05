const express = require( "express" )
const bodyParser = require( "body-parser" )
const session = require( "express-session" )
const massive = require( "massive" )
const cartController = require("./controllers/cartController");
require( "dotenv" ).config()

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






const port = 9000
app.listen( port, () => {
  console.log( `This server is over ${ port }!!!` )
})