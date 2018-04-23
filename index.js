
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParse = require('body-parser');
const app = express();
const session = require('client-sessions');
var request = require('request');
var querystring = require('querystring');
var http = require('http');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FYLSA');
var Schema = mongoose.Schema;



const router = express.Router();

const usersC = require('./Controllers/UserController');
const authenticationC = require('./Controllers/AuthenticationController');
const productsC = require('./Controllers/ProductsController');
const companyC = require('./Controllers/CompanyController');
const associatesC = require('./Controllers/AssociatesController');
const cotizacionC = require('./Controllers/CotizacionController');
/*
* Modelos a a importar

var cotizacionSchema = require('./Model/CotizacionSchema');

*/
app.use(bodyParse.json());

app.use('/users',usersC);
app.use('/auth',authenticationC);
app.use('/products',productsC);
app.use('/company',companyC);
app.use('/associates',associatesC);
app.use('/cotizacion',cotizacionC);




/*
Puerto donde se escucha la Aplicacion
*/
app.listen(8080,function(){
    console.log("listening port 8080");
})
