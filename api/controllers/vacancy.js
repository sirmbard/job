const express = require('express');
const router = express.Router();
const vacancy = require('../models/vacancy');


// create vacancy

router.get('/add', (req, res) =>{
    res.render('add_job.pug', {title: 'Add job page'});
});

router.post('/add', (req, res) =>{
    new vacancy({title:req.body.title, salaryMin:req.body.salaryMin, salaryMax:req.body.salaryMax, employer:req.body.employer,
                employerContacts:req.body.employerContacts, employerAbout:req.body.employerAbout, requirements:req.body.requirements,
                responsibility:req.body.responsibility, consitions:req.body.consitions, addDate:Date.now()}).save();
    console.log(req.body.title);

    res.redirect('/add')
});



module.exports = router;
