const mongoose=require('mongoose');

const providerSchema=mongoose.Schema({
    name:String,
    uuid: String,
    managers: [String],
    products:Array
})

const providerModel= mongoose.model('Providers',providerSchema);

module.exports = providerModel