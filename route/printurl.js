const urlshortner= require("../models/datamodel");
const express=require("express");
const router = express.Router();

router.post("/longurl", async(req, res) => {
    try{
        const payload=req.body;
   const validate= new urlshortner({
    LongUrl:payload.LongUrl,
    ShortUrl:ShortCode()
});
   await validate.save((err,data)=>{
    if(err){
       return res.status(400).send("insertes error")
    }
    res.status(201).send({data:data,message:"sucessfully entered"});
console.log(data);
})

     } catch(error){
        res.status(500).send({message:"server error"});
     }
    });
function ShortCode(){
    var randomstring="";
    var limit="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var length=limit.length;
    for(var i=0;i<=5;i++){
        randomstring +=limit.charAt(Math.floor(Math.random()*length));
    }
    return randomstring;
   }

   router.get("/shorturl",async(req,res)=>{
    try{
        urlshortner.find((err,data)=>{
    if(err){
        res.status(400).send({message:"error while retriving"})
    }
    res.status(200).send(data);
})
    }
    catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });  
    }

})

module.exports=router;