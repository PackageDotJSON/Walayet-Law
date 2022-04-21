const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path');
const nodemailer = require("nodemailer");

const app = express();

const router = express.Router();

// app.use(compression());

// app.disable('x-powered-by');

// app.use(express.static(__dirname + '/dist'));
// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.use(cors());
app.use(bodyParser.json());

router.post('/api/getReachMeBackData', (req, res) => {
    if(req.body.phoneNumber) {
        console.log(req.body.phoneNumber);
    }
});

router.post('/api/getContactData', (req, res) => {
    if(req.body.contactForm){
        console.log(req.body.contactForm);
    }
});

async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "muhammad.hassan@secp.gov.pk", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);

app.use(router);

const port = 3000;
const address = '0.0.0.0';

// const server = http.createServer(app);

// server.listen(port, address, () => {
//     console.log(`running on ${port}`)
// });

app.listen(port, address, () => {
    console.log(`running on ${port}`)
});