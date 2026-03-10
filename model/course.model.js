const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  auther: {
     type: String,
    required: true,
          minlength: [5, "Author must be at least 5 characters"]    
  },
   password:{type:String,required:true},
   confirmpassword:{type: String, required: true, select:false}

}, {timestamps: true});
courseSchema.pre('save', async function(next){

  
    if(this.password !==this.confirmpassword){
        return next(new Error("Password and confirm password do not match"))};

})

module.exports = mongoose.model("Course", courseSchema);