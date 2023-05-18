const express = require('express');
const app = express();

const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
var passport = require('passport');
var crypto = require('crypto');

require('dotenv').config();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'));

app.listen(3000)