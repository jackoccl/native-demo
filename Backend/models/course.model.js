const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const courseSchema = new Schema({
    name:{type:String,required:true},
    instructor:{type:String,required:true},
    code:{type:String,required:true},
    credits:{type:Number,required:true},
    enrolledStudentId:[{type:Schema.Types.ObjectId, ref:'User'}]
 
 },{
     timstamps:true,
 });

const Course = mongoose.model('Course',courseSchema);

module.exports = Course;