const express = require('express');
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://Admin:fylsa@ds237700.mlab.com:37700/fylsa');
var Schema = mongoose.Schema;
var request = require('request');
var querystring = require('querystring');
const bodyParse = require('body-parser');
const router = express.Router();




//app.use(bodyParse.json());

/*
* Modelo a usar
*/

var userSchema = require('../Model/UserSchema');

router.get('/prueba',function(req,res){
   
    console.log("HOLI");
});

module.exports = router;