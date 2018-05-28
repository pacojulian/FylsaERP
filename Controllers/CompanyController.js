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

const companySchema = require('../Model/CompanySchema');

/*
Insert Company
*/
router.post('/new',function(req,res){
    


    const company = new companySchema(req.body);
    company.save(err=>{
     if(err) return res.status(500).send(err);
        
    return res.json({success : "Company Created successfully."});
       
    });
   
});

router.get('/find',function(req,res){
        console.log(req.query.id)
    var companyId = req.query.id;
      companySchema.findOne({_id:companyId})
    .select('-_id')
    .then(company  => {
          console.log(company);
              res.json(company);           
              console.log(company); 
         
         
        })
          .catch(error => {
         res.json({error:"Error"});
         
     })
   
});


router.get('/findAll',function(req,res){   
      companySchema.find({})
    .then(company  => {           
              res.json(company);           
                     
        })
          .catch(error => {
         res.json({error:"Error"});
         
     })
   
});
router.post('/update',function(req,res){
    //console.log(req.body._id);
    companySchema.findByIdAndUpdate(req.body._id,req.body,{new: true},
    (err, company) => {
        if (err) return res.status(500).send(err);
          return res.send(company);
        
    }
)

});

router.get('/delete',function(req,res){
    var companyId = req.query.id;
    companySchema.findByIdAndRemove(companyId,
    (err, company) => {
        if (err) return res.status(500).send(err);
       return res.json({success : "Company Deleted successfully."});
    }
)

});





module.exports = router;