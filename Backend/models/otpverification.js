const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VerificationSchema = new Schema({
   userID:{
    type: String,
    required: true
   },
   otp: {
        type: String,
        required: true

},
created: {
    type: Date,
    required: true

},
expired: {
    type: Date,
    required: true

}
})


let VerificationData = mongoose.model('otps', VerificationSchema);

module.exports = VerificationData