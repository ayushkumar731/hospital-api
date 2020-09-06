const express = require('express');
const app = express();

//to load the env variable
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

//to load the database
const db = require('./config/mongoose');

//load global error handler
const globalErrorsHandler = require('./controllers/errorController');

const passport = require('passport');
const jwtPassport = require('./config/passport-jwt-strategy');

//initialize and session the passport
app.use(passport.initialize());
app.use(passport.session());

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes'));

//middleware use to handle the global error
app.use(globalErrorsHandler);

// exports app.js
module.exports = app;
