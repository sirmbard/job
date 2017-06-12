const express = require('express');
const router = express.Router();
const vacancy = require('../models/vacancy');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index.pug', {title: 'main page'})
});

router.use(require('./vacancy'));
router.use(require('./employer'));

module.exports = router;