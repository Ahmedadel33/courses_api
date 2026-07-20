const connecteddb = require("./config/db.js")
const express =require("express");
const app= express();
app.use(express.json()); 
const mongoose= require("mongoose")
const dotenv = require("dotenv")
const Helper=require("./utilities/helper.fun.js")
// console.log(process.env);

var cors = require('cors')
app.use(cors({

}))
 
module.exports = sum;

dotenv.config({path : "./.env"})
const port= process.env.port
connecteddb()

const userRoutes = require("./routs/routs.user.js");

const courseRoutes = require("./routs/routs.courses");
app.use("/api/courses", courseRoutes); 
app.use("/api/user",userRoutes) 
app.use( (req, res) =>{  
    res.status(404).json({
    status: Helper.FAIL,
    message: "Route not found"            
})
});

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