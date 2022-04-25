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

router.post('/api/getContactData', async (req, res) => {
    if(req.body.contactForm){
        const response = await main(req.body.contactForm);
        res.send(response);
    }
});

async function main(form) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    console.log(process.env.HOST, process.env.USER_NAME, process.env.PASSWORD);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.USER_NAME, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${form.userName} <${form.userEmail}>`, // sender address
      to: process.env.USER_NAME, // list of receivers
      subject: form.userSubject, // Subject line
      text: `userPhone: ${form.userPhone} ${form.caseDescription}`, // plain text body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    let responseData;
    if(info.messageId !== null && info.messageId !== undefined) {
      responseData = {
        data: [],
        statusCode: 200,
        message: 'Email sent successfully',
        error: false
      }
    } else {
      responseData = {
        data: [],
        statusCode: 500,
        message: 'Incorrect email entered',
        error: true
      }
    }
    return responseData;
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