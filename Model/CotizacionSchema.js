var mongoose = require('mongoose')
, Schema = mongoose.Schema

var CotizacionSchema = new Schema({
    
    _id: String,
    DATE:String,
    COMPANY:String,
    ADDRESED:String,
    REASON:String,
    COST: { type: Number},
    DELIVERY_TIME:String,
    PAYMENT_CONDITIONS: String,
    COTIZACION_SERVICE:[{
                        ITEM:{ type: Number},
                        DESCRIPTION:String,
                        PROVIDE: String,
                        CANTITY:{ type: Number},
                        MEASURE_UNIT:String,
                        SALE_PRICE:{ type: Number}
                        }],
    USER_ID: { type: Number}
    
    


},{collection:'COTIZACION'});

var Cotizacion = mongoose.model('COTIZACION',CotizacionSchema);

module.exports = Cotizacion;