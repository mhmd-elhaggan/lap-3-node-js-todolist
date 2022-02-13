const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    user:{
        type : String,
        minLength: 5,
        maxLength: 25,
        required: true,
        trim: true,
        unique: true
    },
    dateOfBirth: {
        type : Date,
        required: true
    }
});

const userModel = mongoose.model('user', usersSchema);

module.exports = userModel;