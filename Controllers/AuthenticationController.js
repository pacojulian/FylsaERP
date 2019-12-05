const express = require('express');
const app = express();
var config = require('../Config')
var mongoose = require('mongoose');
mongoose.connect(config.mongoConnection.url, { useNewUrlParser: true });
const bodyParse = require('body-parser');
const router = express.Router();
app.use(bodyParse.json());
const jwt = require('jsonwebtoken');
const fs = require('fs')

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

var tokenData = {
  user: this.user,
  admin: this.admin,
  email: this.email
}

//TODO delete this
router.post('/login/v1',function(req,res){
  var user = req.body.user;
  tokenData.user = user;
  tokenData.admin = 1;
  tokenData.email = 'paco@gmail.com'
    let token = jwt.sign(tokenData, config.jwt.secret, { algorithm: 'HS256'});
    res.send(token);
});

function isAuthenticated(req, res, next) {
  if (typeof req.headers.authorization !== "undefined") {
      let token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, config.jwt.secret, { algorithm: "HS256" }, (err, user) => {
          if (err) {  
            console.log(err);
              res.status(500).json({ error: "Not Authorized" });
              throw new Error("Not Authorized");
          }
          return next();
      });
  } else {
      res.status(500).json({ error: "Not Authorized" });
      throw new Error("Not Authorized");
  }
}

function getToken(req){
    const usertoken = req.headers.authorization;
    const token = usertoken.split(' ');
    const decoded = jwt.verify(token[1], 'MySuperSecretPassPhrase');
    return decoded;
}
//TODO delete this
router.post('/login/v2',isAuthenticated,function(req,res){
  console.log(getToken(req));
  res.json({ "message" : "THIS IS SUPER SECRET, DO NOT SHARE!" })
});

module.exports = router;