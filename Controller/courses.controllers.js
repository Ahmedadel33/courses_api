const express = require("express");
// let {courses} = require('../data/courses')
const { validationResult } = require("express-validator");
const { default: mongoose } = require("mongoose");
const Helper=require("../utilities/helper.fun.js")
const Course = require("../model/course.model.js");
//route get all user
const getalluser = async (req, res) => {
  //paginition
const query=req.query;
const limit=query.limit || 2;
 const page= query.page || 1;
 const skip= (page -1)*limit;
  const courses = await Course.find({/*title: "object orianted programming"*/},{"auther": false}).limit(limit).skip(skip)
  res.json(courses);
};

const getCourseById =
  async (req, res) => {
      const search = await Course.findById(req.params.id);
      if (!search) {
        res.status(404).json({message: Helper.FAIL});
      }
      res.status(200).json({massage:Helper.SUCCESS,
        data: search,
      });
      };
  //     try {

  // } catch (error) {
  //   res.status(404).json({massage:Helper.FAIL,
  //     data: null
  //   });
  // }
// };
// add new course
const addcoures = async (req, res) => {
 
  const newCours = new Course(req.body);
  await newCours.save();
  res.status(201).json({ message: Helper.SUCCESS ,massage: "Courses aded"  , data: newCours });};
//  try {
    
//   } catch (error) {
    
//   }
//   res.status(404).json({ message: Helper.FAIL ,massage: "Courses not aded" });
// };
// edit on faild in course
const editcourse = async (req, res) => {
 
    let request = req.params.id;
    //find by id and update data
    let course = await Course.findByIdAndUpdate(request, {
      $set: { ...req.body },
    });
    if (!course) {
      //if id wrong NEEED Repair here
      return res.status(404).json( {status: Helper.ERROR, message:"ID wrong"});
    }
    res.status(200).json(course);
  //    try {
  // } catch (error) {
  //   // if id not object id using jsend
  //   res.status(500).json( {status:Helper.ERROR, massage:"not found error object id"});
  // }
};
// Delete course using jsend
const deleted = async (req, res) => {
 
    const dellet = req.params.id;
    const course = await Course.findByIdAndDelete(dellet);
      if(!course){
    return  res.status(400).json({status:Helper.FAIL,message: "course id not found" })
    }
     return res.status(200).json({
      message: "Course deleted",
      data:null
      });
  //      try {
  // } catch (error) {
  //   res.status(500).json({ status: Helper.ERROR ,massage:"Invalid object id", data:null});
  // }
};
module.exports = {
  getalluser,
  // getcourse,
  getCourseById,
  addcoures,
  editcourse,
  deleted,
};
