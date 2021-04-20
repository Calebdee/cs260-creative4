const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



// connect to the database
mongoose.connect('mongodb://localhost:27017/creative5', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

const users = require("./users.js");
app.use("/api/users", users.routes);

const teams = require("./teams.js");
app.use("/api/teams", teams.routes);

const pokemon = require("./pokemon.js");
app.use("/api/pokemon", pokemon.routes);


app.listen(3007, () => console.log('Server listening on port 3007!'));
