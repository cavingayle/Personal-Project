module.exports = ( req, res, next ) => {
    const { session } = req
    if (! session.user ) {
    
        session.user = { name: '', userid:'', email: '', phone:'', address: '', city: '', state:'', zipcode:'', cart: [], lastLocation: '', isAdmin: false}
    }
    next()
  }