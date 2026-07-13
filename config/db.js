const mongoose = require("mongoose")

const connecteddb= async function (){
try{
    await mongoose.connect(process.env.mongo_url)
    console.log("db connected");
}
catch(error){
    console.log(error);
}
}
module.exports= connecteddb;