require( "dotenv" ).config();
const nodemailer = require( 'nodemailer' );

module.exports={
    sendMail:( req, res ) =>{
        const { name, email, text } = req.body
        let transporter = nodemailer.createTransport({
                service: "gmail",
                auth:{
                    user: "mcintir2@gmail.com",
                    pass: process.env.NODE_MAILER_PASS,
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
    
        