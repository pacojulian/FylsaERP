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


router.put('/update',function(req,res){
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