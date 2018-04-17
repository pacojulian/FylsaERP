
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParse = require('body-parser');
const app = express();
const fs = require('fs');
const path = require('path');
const session = require('client-sessions');
var request = require('request');
var querystring = require('querystring');
var http = require('http');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FYLSA');
var Schema = mongoose.Schema;
var flash = require('connect-flash');
var csv = require("fast-csv");




/*
* Modelos a a importar
*/
var userSchema = require('./Model/UserSchema');
var inventorySchema = require('./Model/InventorySchema');
var companySchema = require('./Model/CompanySchema');
var associatesSchema = require('./Model/AssociatesSchema');
var cotizacionSchema = require('./Model/CotizacionSchema');

const router = express.Router();

app.use(bodyParse.json());



app.post('/login',function(req,res){
    var user = req.body.user;
    var pass = req.body.password;
     userSchema.findOne({_id:user,PASSWORD:pass})
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

app.get('/getCotizacion',function(req,res){
   
  cotizacionSchema.find({},function(err, cotizacion) {
            if (err)
                res.send(err);

            res.json(cotizacion);
             console.log(cotizacion);
        });
});

app.get('/import', function(req, res, next) {
    
    
 const csvFilePath = 'file.csv';
 var stream = fs.createReadStream(csvFilePath);
 
    
var csvStream = csv()
        .on("data", function(data){
         
            
         var item = new inventorySchema({

              _id: data[0],
             
              DESCRIPTION: data[1],

              PRICE: data[2],

              UNITY_MESURE: data[3]


         });
               
          item.save(function(error){

            //console.log(item);

              if(error){

                   throw error;

              }

          }); 

    }).on("end", function(){
          console.log(" End of file import");
    });
  
    stream.pipe(csvStream);

    res.json({success : "Data imported successfully.", status : 200});
     
  })


/*
Puerto donde se escucha la Aplicacion
*/
app.listen(8080,function(){
    console.log("listening port 8080");
})
