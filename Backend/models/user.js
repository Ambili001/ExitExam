const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
   
    email: {
        type: String,
        required: true

}
})


let UserData = mongoose.model('users', UserSchema)

module.exports = UserData