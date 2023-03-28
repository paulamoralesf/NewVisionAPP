const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    uuid:String,
    client: clientModel,
    date: Date,
    cost:Number,
    money_advance:Number,
    properties:{
        material:String,
        photosensible:String,
        type:String,
        brand:String,
        color:String,
        gama:String,
        perforations:Boolean,
        bill:Boolean,
        description:String

    },

})

const orderModel= mongoose.model('Orders',orderSchema);

module.exports = orderModel