var mongoose = require('mongoose')
, Schema = mongoose.Schema

var UserSchema = new Schema({
    
    _id: { type: Number},
    EMAIL:String,
    NAME:String,
    LASTNAME:String,
    PASSWORD:String,
    ADMIN_ID: { type: Number}

},{collection:'USERS'});

var User = mongoose.model('USERS',UserSchema);

module.exports = User;