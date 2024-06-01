// backend/db.js
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://anubhavpurohitno1:anubhav@cluster0.ilrl61g.mongodb.net/Nasty")

// Create a Schema for Users

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountschema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})
// Create a model from the schema
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('account', accountschema);

module.exports = {
	User,Account
};
