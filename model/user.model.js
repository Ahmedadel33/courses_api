const mongoose=require('mongoose');  //اول حاجة بنجيب المونقووز عشان نقدر نستخدمه في تعريف السكيمة بتاعتنا 

const userSchema=new mongoose.Schema({ //بعدين بنعرف السكيمة بتاعتنا اللي هتحتوي على الحقول اللي احنا عايزينها في اليوزر
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'], // Regular expression to validate email format
        
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [6, 'Password must be at least 6 characters long.']
    }
    
});
module.exports = mongoose.model("user", userSchema);