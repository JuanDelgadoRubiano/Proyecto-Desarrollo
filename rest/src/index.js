const express = require('express');
const session = require('express-session');
const passport = require('passport');


const app = express();
//require('./config/passport');
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rutas
app.use(require('./routes/index'));


app.listen(3000);

console.log('Server on port 3000');
