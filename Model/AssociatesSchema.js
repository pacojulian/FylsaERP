var mongoose = require('mongoose')
, Schema = mongoose.Schema

var AssociatesSchema = new Schema({
    
    _id: String,
    NAME:String,
    COMPANY_ID:String


},{collection:'ASSOCIATES'});

var Associates = mongoose.model('ASSOCIATES',AssociatesSchema);

module.exports = Associates;