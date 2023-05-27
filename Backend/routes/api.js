const express = require('express')
const router = express.Router() //routing function
const UserData=require('../models/user');
const nodemailer=require('nodemailer');
app.get('/', function (req, res) {
    res.render('contact');
});

var email;

var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: 'testuser1273000@gmail.com',
        pass: 'testuser123',
    }

});

router.post('/send',function(req,res){
    email =req.body.email
var mailOptions = {
    to: req.body.email,
    subject: "Otp for registration is: ",
    html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
};
})
module.exports = router;