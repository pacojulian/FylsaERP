const express = require('express');
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FYLSA');
var Schema = mongoose.Schema;
var request = require('request');
var querystring = require('querystring');
const bodyParse = require('body-parser');
const router = express.Router();
var flash = require('connect-flash');
var csv = require("fast-csv");
const fs = require('fs');
const path = require('path');



app.use(bodyParse.json());

/*
* Modelo a usar
*/

var inventorySchema = require('../Model/InventorySchema');



router.get('/import', function(req, res,next) {  
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
     
  });


module.exports = router;