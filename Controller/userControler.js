const joi =require("./validate/joiUser")
const usermodel = require("../model/user.model")
const bcrypt = require("bcrypt")
const register = async (req,res) => {
const {error , value}=joi.validate(req.body,{
  abortEarly:false,
})
if(error){
  return res.status(400).json({
    status: "fail",
    message: error.details.map((err) => err.message).join(", ")
  })
    const  {name , email , password }=value;
    const user =await  usermodel.findOne({email})
    if(user){
      return res.status(400).json({
        status: "fail",
        message: "email already exists"
      })
    }
    const hashpassword = await bcrypt.hash(password, 10)
    const newuser = new usermodel({
      name,
      email,
      password: hashpassword
    })
    await newuser.save();
    res.status(201).json({
      status: "success",
      message: "user registered successfully",
      data: newuser
    })
}
}

const login=async (req,res )=>{
  const {error , value}=joi.validate(req.body,{
    abortEarly:false,
  })
  if(error){
    return res.status(400).json({
      status: "fail",
      message: error.details.map((err) => err.message).join(", ")
    })
  }
  const {email ,  password}=value
}