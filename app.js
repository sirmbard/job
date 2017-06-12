const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose =  require('mongoose');
const config = require('./api/config.json');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();


// connect to db
mongoose.connect(config.dbUrl);

if (config.isDev === true){
    console.log(mongoose.connection.readyState)
}

//setup view engine
app.set('views', path.join(__dirname, '/api/views'));
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// session store in mongo
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url:config.dbUrl
    })
}));

app.use(require('./api/controllers/route'));



app.listen(config.port, function() {
    console.log('Listening on port ' + config.port)
});
