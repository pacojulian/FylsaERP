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

const associatesSchema = require('../Model/AssociatesSchema');

/*
Insert Associates
*/
router.post('/new',function(req,res){



    const associates = new associatesSchema(req.body);
    associates.save(err=>{
     if(err) return res.status(500).send(err);

    return res.json({success : "Associates Created successfully."});

    });

});

router.get('/find',function(req,res){

    var associatesId = req.query.id;
      associatesSchema.findOne({_id:associatesId})
    .select('-_id')
    .then(associates  => {
              res.json(associates);
              console.log(associates);


        })
          .catch(error => {
         res.json({error:"Error"});

     })

});

router.get('/findByCompany',function(req,res){
   var company = req.query.company;
   console.log(company);

     associatesSchema.find({COMPANY:company})
   .select('-_id')
   .then(associates  => {
             res.json(associates);
             console.log(associates);


       })
         .catch(error => {
        res.json({error:"Error"});

    })

});

router.get('/findAll',function(req,res){
      associatesSchema.find({})
    .then(associates  => {
              res.json(associates);
              console.log(associates);
        })
          .catch(error => {
         res.json({error:"Error"});

     })

});
router.get('/findByCompany',function(req,res){
        
    var company = req.query.company;
      associatesSchema.find({COMPANY:company})
    .select('-_id')
    .then(companies  => {           
              res.json(companies);           
              console.log(companies); 
         
         
        })
          .catch(error => {
         res.json({error:"Error"});
         
     })
   
});

router.post('/update',function(req,res){
    //console.log(req.body._id);
    associatesSchema.findByIdAndUpdate(req.body._id,req.body,{new: true},
    (err, associates) => {
        if (err) return res.status(500).send(err);
        return res.send(associates);
    }
)

});

router.get('/delete',function(req,res){
    var associatesId = req.query.id;
    associatesSchema.findByIdAndRemove(associatesId,
    (err, associates) => {
        if (err) return res.status(500).send(err);
       return res.json({success : "Associated Deleted successfully."});
    }
)

});





module.exports = router;
