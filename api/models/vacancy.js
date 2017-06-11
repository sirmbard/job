const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vacancySchema = new Schema({
    title: String,
    salaryMin:  Number,
    salaryMax:  Number,
    employer: String,
    employerContacts: [],
    employerAbout: String,
    requirements: String,
    responsibility: String,
    consitions: String,
    addDate: Date
});


module.exports = mongoose.model('Vacancy', vacancySchema);