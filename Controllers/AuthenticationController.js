const express = require('express');
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://Admin:fylsa@ds237700.mlab.com:37700/fylsa');
var Schema = mongoose.Schema;
var request = require('request');
var querystring = require('querystring');
const bodyParse = require('body-parser');
const router = express.Router();

app.use(bodyParse.json());

/*
* Modelo a usar
*/

var userSchema = require('../Model/UserSchema');

router.post('/login',function(req,res){
    var user = req.body.user;
    var pass = req.body.password;
     userSchema.findOne({EMAIL:user,PASSWORD:pass})
    .then(user  => {           
              res.json(user);           
              console.log(user); 
         
         
        })
          .catch(error => {
         res.json({error:"Error"});
         console.log("ERROR");
         
     })
});


module.exports = router;