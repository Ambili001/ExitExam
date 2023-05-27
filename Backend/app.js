const express = require("express");
const app = new express();
const logger = require("morgan");
require("./middleware/mongoDB");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
app.use(logger('dev'));
const api = require('./routes/api');
app.use('/api',api);

const VerificationData=require('./models/otpverification');
const sendOTP=require('./sendotp');

const PORT=3000;
app.listen(PORT, function() {
    console.log(`listening to port ${PORT}`);
});