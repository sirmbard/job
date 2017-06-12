const express = require('express');
const router = express.Router();
const vacancy = require('../models/vacancy');

/* GET home page. */
router.get('/', (req, res) => {
    vacancy.find(function (err, vacancies) {
        res.send(vacancies)
    });
});

router.use(require('./vacancy'));

module.exports = router;