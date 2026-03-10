
const express =require("express");
const app= express();
app.use(express.json()); 
const mongoose= require("mongoose")
const dotenv = require("dotenv")
const Helper=require("./utilities/helper.fun.js")
// console.log(process.env);


const middleware= (req,res,next)=>{
    console.log("im middleware");
        next()
}
app.use(middleware)
// Enviroment Proce
dotenv.config({path : "./.env"})
const url= process.env.mongo_url
const port= process.env.port
// console.log(process);

mongoose.connect(url).then(()=>{
    console.log("moongoose connected");
})

const courseRoutes = require("./routs/routs.courses");
app.use("/api/courses", courseRoutes); 

//  دا بتاع الراوتس اللي مش موجوده فقط 
app.use( (req, res) =>{  
    res.status(404).json({
    status: Helper.FAIL,
    message: "Route not found"            
})
});

// دا بتاع الايرور اللي بيحصل في السيرفر علي الراوتس اللي موجوده
app.use((err, req, res,next) => {
    res.status(500).json({
        status: Helper.ERROR,  
        message: "Internal Server Error",
        error: err.message,
        
    })
});
        





app.listen(port || 4000,()=>{
console.log(`im lissning in port : ${ port} `);
}) 