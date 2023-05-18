const passport = require('passport');
const LocalStrategy = require('passport-local');
const connection = require('./database');
const User = connection.models.user;

