
const { body } = require('express-validator');
// let {courses} = require('../data/courses')
const express=require("express");
const routes=express.Router();
const usercontroller = require('../Controller/userControler');
const asyncWrapper =require("../middleware/asyncwraber")

//get all User
// Register
//Login

routes.route('/')
                .get(asyncWrapper(usercontroller.getallCourse))
                                .get(asyncWrapper(usercontroller.register))
                                .get(asyncWrapper(usercontroller.login))
 
module.exports = routes;
