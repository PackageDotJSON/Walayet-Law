const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path');
const env = require('dotenv');
const nodemailer = require("nodemailer");

const app = express();

env.config();

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

    main().catch(console.error);
});

async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.walayetlaw.com",
      port: 465,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'admin@walayetlaw.com', // generated ethereal user
        pass: 'Saqibmalik@1991', // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"do not reply" <admin@alayetlaw.com>', // sender address
      to: "kiyani1995@gmail.com", // list of receivers
      subject: "Hello", // Subject line
      text: "this is a test mail", // plain text body
      html: "<b>this is a test mail</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

app.use(router);

const port = process.env.PORT;
const address = process.env.ADDRESS;

// const server = http.createServer(app);

// server.listen(port, address, () => {
//     console.log(`running on ${port}`)
// });

app.listen(port, address, () => {
    console.log(`running on ${port}`)
});