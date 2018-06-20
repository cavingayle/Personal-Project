require( "dotenv" ).config();
const nodemailer = require( 'nodemailer' );

module.exports={
    sendMail:( req, res ) =>{
        const { name, email, text } = req.body
        // const db = req.app.get('db');
        
        let transporter = nodemailer.createTransport({
                service: "gmail",
                auth:{
                    user: "mcintir2@gmail.com",
                    pass: process.env.NODE_MAILER_PASS,
                    clientId: process.env.OAUTH_CLIENT_ID,
                    clientSecret: process.env.OAUTH_CLIENT_SECRET,
                    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
                    accessToken: process.env.OAUTH_ACCESSTOKEN,
                    expires: 1484314697598
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            
        let message = {
            from: name + ' ' + 'mcintir2@gmail.com',
            to:'mcintir2@gmail.com',
            subject:'༜ Comments/Concerns ༜',
            text: name + ' ' + email + ' ' + text,
        }

        transporter.sendMail( message, ( err, info ) => {
            if( err ){
                console.log(err);
              
            }
            else{
               
                console.log( "Message Sent", info );
            }
            
        })
        
    }
}   
    
        

//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//         type: 'OAuth2',
//         user:config.user,
//         clientId:config.clientId,
//         clientSecret:config.clientSecret,
//         refreshToken:config.refreshToken,
//         accessToken: config.accessToken,
//         expires: 1484314697598
// }
//     });

//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: 'bar@example.com, baz@example.com', // list of receivers
//         subject: 'Hello ✔', // Subject line
//         text: 'Hello world?', // plain text body
//         html: '<b>Hello world?</b>' // html body
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     })

    