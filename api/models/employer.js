const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employerSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },

    employerTitle: String,
    employerPhoneNumber: [],
    employerMail: [],
    employerAdress: String,
    employerAbout: String,
    registerDate: Date
});


module.exports = mongoose.model('employer', employerSchema);