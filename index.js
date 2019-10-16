
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParse = require('body-parser');
const app = express();
const session = require('client-sessions');
var request = require('request');
var querystring = require('querystring');
var http = require('http');
var mongoose = require('mongoose');
mongoose.connect('mongodb://Admin:fylsa@ds237700.mlab.com:37700/fylsa');
var Schema = mongoose.Schema;

const PORT = process.env.PORT || 8080;
/*
Test comment to see pull request from heroku
*/

const router = express.Router();

const usersC = require('./Controllers/UserController');
const authenticationC = require('./Controllers/AuthenticationController');
const productsC = require('./Controllers/ProductsController');
const companyC = require('./Controllers/CompanyController');
const associatesC = require('./Controllers/AssociatesController');
const cotizacionC = require('./Controllers/CotizacionController');

app.use(bodyParse.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    
  next();
});

app.use('/users',usersC);
app.use('/auth',authenticationC);
app.use('/products',productsC);
app.use('/company',companyC);
app.use('/associates',associatesC);
app.use('/cotizacion',cotizacionC);

/*
Puerto donde se escucha la Aplicacion
*/
app.listen(PORT,function(){
    console.log("listening port 8080");
})
