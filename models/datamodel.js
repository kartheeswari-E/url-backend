const mongoose=require('mongoose')

const urlSchema=new mongoose.Schema({
   LongUrl:{
    type:String,
    require:true,
},
ShortUrl:{
    type:String,
    unique:true,
}
})
module.exports=mongoose.model('urlshortner',urlSchema);