const express = require('express');
const router = express.Router();
const vacancy = require('../models/vacancy');

/* GET home page. */
router.get('/', (req, res) => {
    vacancy.find(function (err, vacancies) {
      res.send(vacancies)
    });
});


// create vacancy

router.get('/add', (req, res) =>{
    res.render('add_job.pug', {title: 'Add job page'});
});

router.post('/add', (req) =>{
    new vacancy({title:req.body.title, salaryMin:req.body.salaryMin, salaryMax:req.body.salaryMax, employer:req.body.employer,
                employerContacts:req.body.employerContacts, employerAbout:req.body.employerAbout, requirements:req.body.requirements,
                responsibility:req.body.responsibility, consitions:req.body.consitions, addDate:Date.now()}).save();
    console.log(req.body.title);
});



module.exports = router;
