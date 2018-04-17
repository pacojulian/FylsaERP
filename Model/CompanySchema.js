var mongoose = require('mongoose')
, Schema = mongoose.Schema

var CompanySchema = new Schema({
    
    _id: String,
    NAME:String,
    DIRECTION:String,
    RFC:String
    

},{collection:'COMPANY'});

var Company = mongoose.model('COMPANY',CompanySchema);

module.exports = Company;