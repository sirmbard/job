const express = require('express');
const router = express.Router();
const Employer= require('../models/employer');
const crypto = require('crypto');


router.get('/employer/register', (req, res) => {
    res.render('employer/register', {title: 'Register employer'})
});

router.post('/employer/register', (req, res) =>{
    new Employer ({userName: req.body.userName, password: hash(req.body.password), employerTitle: req.body.employerTitle,
                employerPhoneNumber: req.body.employerPhoneNumber, employerMail: req.body.employerMail,
                employerAbout: req.body.employerAbout, registerDate: Date.now()}).save();
    console.log(req.body.userName);
    res.redirect('/')
});

// router.get('/employer/login', (req, res) =>{
//
// })


function hash(text) {
    return crypto.createHash('sha1')
        .update(text).digest('base64')
}


module.exports = router;