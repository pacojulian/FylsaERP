const express = require('express');
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FYLSA');
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
    .select('-_id')
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