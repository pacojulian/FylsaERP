const express = require('express');
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FYLSA');
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