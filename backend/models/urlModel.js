const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    userId:{type :String,required:true},
    shortId:{type :String,required:true,unique:true},
    redirectURL:{type :String,required:true},
    visitHistory: [{ timestamp: { type: Number },ipAddress:{type:String} ,location:{type:String},device:{type:String}}]
})

const urlModel = mongoose.model('url',urlSchema);

module.exports= {
    urlModel
}