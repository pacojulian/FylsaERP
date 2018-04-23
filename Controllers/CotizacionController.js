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

var cotizacionSchema = require('../Model/CotizacionSchema');

router.get('/findOne',function(req,res){
   
   var cotizacionId = req.query.id;
      cotizacionSchema.findOne({_id:cotizacionId})
    .select('-_id')
    .then(cotizacion  => {           
              res.json(cotizacion);           
              //console.log(cotizacion); 
         
        })
          .catch(error => {
         res.json({error:"Error"});
         
     })
});

router.post('/new',function(req,res){
    


    const cotizacion = new cotizacionSchema(req.body);
    cotizacion.save(err=>{
     if(err) return res.status(500).send(err);
        
    return res.json({success : "Cotizacion Created successfully."});
       
    });
   
});

module.exports = router;