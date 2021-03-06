const express = require('express');
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://Admin:fylsa@ds237700.mlab.com:37700/fylsa');
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

router.get('/find',function(req,res){
    
          
    var productDesc = req.query.desc;
      inventorySchema.find({DESCRIPTION: new RegExp(productDesc,'i')})
    .select('-_id')
    .then(products  => {                
              res.json(products);  
          //console.log(products);       
        })
          .catch(error => {
         res.json({error:"Error"});
         
     })
});


router.get('/import', function(req, res,next) {  
 const csvFilePath = 'file.csv';
 var stream = fs.createReadStream(csvFilePath);
 
    
var csvStream = csv()
        .on("data", function(data){
         
            
         var item = new inventorySchema({

              _id: data[0],
             
              DESCRIPTION: data[1],

              PRICE: data[2],
             
              LABOR_PRICE: data[3],
             

              UNITY_MESURE: data[4]


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