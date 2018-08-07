function Login( cart, total ){
    localStorage.setItem( 'location', window.location.pathname )
    const local = localStorage.getItem( 'location' )
    sessionStorage.setItem( 'sessionItem', JSON.stringify({ cart: cart, total: total }));
    const callbackUrl = window.location.origin + '/auth/callback'
    window.location = `https://${ process.env.REACT_APP_AUTH0_DOMAIN }/login?client=${ process.env.REACT_APP_AUTH0_CLIENT_ID }&scope=openid%20profile%20email&redirect_uri=${ callbackUrl }`
  }
  
  export default Login