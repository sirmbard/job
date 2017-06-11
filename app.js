const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose =  require('mongoose');
const config = require('./api/config.json');
const app = express();


mongoose.connect(config.dbUrl);

if (config.isDev === true){
    console.log(mongoose.connection.readyState)
}


app.set('views', path.join(__dirname, '/api/views'));
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('./api/controllers/'));



app.listen(config.port, function() {
    console.log('Listening on port ' + config.port)
});
