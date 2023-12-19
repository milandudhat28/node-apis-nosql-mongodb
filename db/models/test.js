const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
    test:{
        type: String,
        required: false
    },
})

const User =  mongoose.model('test', TestSchema);

module.exports = User;