const express = require("express");
// let {courses} = require('../data/courses')
const { validationResult } = require("express-validator");
const { default: mongoose } = require("mongoose");
const Helper=require("../utilities/helper.fun.js")
const Course = require("../model/course.model.js");
//route get all user
const getallCourse = async (req, res) => {
  //paginition
const query=req.query;
const limit=query.limit || 3;
 const page= query.page || 1;
 const skip= (page -1)*limit;
  const courses = await Course.find({} , {"__v" : false }  ,{"auther": false}).limit(limit).skip(skip)
  res.json({status: "suscess" , data : courses});
};

const getCourseById =
  async (req, res) => {
      const search = await Course.findById(req.params.id);
      if (!search) {
        res.status(404).json({message: "eror in object id" });
      }
      res.status(200).json({massage:Helper.SUCCESS,
        data: search,
      });
      };
  
const addcoures = async (req, res) => {
 
  const newCours = new Course(req.body);
  await newCours.save();
  res.status(201).json({ message: Helper.SUCCESS ,massage: "Courses aded"  , data: newCours });};

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
    return  res.status(400).json({status:Helper.FAIL,message: "invalid object" })
    }
     return res.status(200).json({
      status : "sucess",
      message: "Course deleted",
      data:null
      });
  //      try {
  // } catch (error) {
  //   res.status(500).json({ status: Helper.ERROR ,massage:"Invalid object id", data:null});
  // }
};
module.exports = {
  getallCourse,
  // getcourse,
  getCourseById,
  addcoures,
  editcourse,
  deleted,
};
