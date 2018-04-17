var mongoose = require('mongoose')
, Schema = mongoose.Schema

var InventorySchema = new Schema({
    
    _id: String,
    DESCRIPTION:String,
    PRICE: { type: Number},
    UNITY_MESURE:String

},{collection:'INVENTORY'});

var Inventory = mongoose.model('INVENTORY',InventorySchema);

module.exports = Inventory;