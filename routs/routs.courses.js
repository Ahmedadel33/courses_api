
const { body } = require('express-validator');
// let {courses} = require('../data/courses')
const express=require("express");
const routes=express.Router();
const coursecontroller = require('../Controller/courses.controllers');
const asyncWrapper =require("../middleware/asyncwraber")




// get all courses
routes.route('/')
                .get(asyncWrapper(coursecontroller.getallCourse))
                .post([body('title').notEmpty().isLength({min:2})],asyncWrapper(coursecontroller.addcoures))

//add get and post and delete in group
routes.route('/:id')
                .get(asyncWrapper(coursecontroller.getCourseById))
// create a new course///////// Post 
//Edit using patch
                .patch(asyncWrapper(coursecontroller.editcourse))
// Delete object 
                .delete(asyncWrapper(coursecontroller.deleted))

module.exports = routes;
