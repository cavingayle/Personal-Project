const axios = require('axios')

module.exports = {

  auth: (req, res) => {
    
      axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, 
        {client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }).then( accessTokenResponse => {
          const accessToken = accessTokenResponse.data.access_token;
            // console.log('-------------accessToken', accessToken)
              return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`)
          .then( userInfoResponse => {
            // console.log("response from auth0",userInfoResponse)
              const userData = userInfoResponse.data;
              const name = userData.name;
              const email = userData.email;
              // console.log(email)
              req.app.get('db').find_user(email).then(response =>{
               
                // console.log("response from database",response)
                if(response.length){
                  // console.log("response from session",response[0].userid)
                  // console.log('userid', response[0].userid)
                  // req.session.user = response[0]
                  req.session.user.userid = response[0].userid;
                  req.session.user.name = response[0].username;
                  req.session.user.email = response[0].useremail;
                  req.session.user.cart = []

                  if(response[0].userid === 1 ){
                    req.session.user.isAdmin = true
                    res.redirect('/');
                  } else {
                  // else if( !req.session.user.cart ){
                  //     res.redirect('/');
                  // }
                  // req.session.user.cart = []
                    res.redirect('/checkout');
                  }
                }
                else
                {
                  req.app.get('db').create_user([name,email]).then(response => {
                    req.session.user.id = response[0].userid;
                    req.session.user.name = response[0].username;
                    req.session.user.email = response[0].useremail;
                    req.session.user.cart = []
                        res.redirect('/checkout');
                })
              }
            
              }).catch(error => {
                console.log("create customer controller error", error);
              
            });
          });
        }).catch(error => {
            console.log("auth controller error", error)
            res.status(500).send('error in auth controller')
          });
      },
      logout: (req, res) => {
        req.session.destroy();
        res.status(200).send("logged out")
    },

        
          }  