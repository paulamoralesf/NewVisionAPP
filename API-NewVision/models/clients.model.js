const mongoose=require('mongoose');

const clientSchema=mongoose.Schema({
    name:String,
    uuid: String,
    managers: [String]
})

const clientModel= mongoose.model('Clients',clientSchema);

module.exports = clientModel