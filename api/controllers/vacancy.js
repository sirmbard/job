const express = require('express');
const router = express.Router();
const vacancy = require('../models/vacancy');


// create vacancy

router.get('/vacancy/add', (req, res) =>{
    res.render('vacancy/create.pug', {title: 'Add job page'});
});

router.post('/vacancy/add', (req, res) =>{
    new vacancy({title:req.body.title, salaryMin:req.body.salaryMin, salaryMax:req.body.salaryMax,
                employer:req.body.employer, employerContacts:req.body.employerContacts,
                employerAbout:req.body.employerAbout, requirements:req.body.requirements,
                responsibility:req.body.responsibility, consitions:req.body.consitions, addDate:Date.now()}).save();
    console.log(req.body.title);

    res.redirect('/vacancy/add')
});



module.exports = router;
