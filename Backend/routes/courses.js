const router = require('express').Router();
const axios = require('axios');
let Course = require('../models/course.model');
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    Course.find()
       .then(courses=>res.json(courses))
       .catch(err=> res.status(400).json('Error: '+err))
})

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const instructor = req.body.instructor;
    const code = req.body.code;
    const credits = req.body.credits;
    const enrolledStudentId = req.body.enrolledStudentId;
    
    const newCourse = Course({name,instructor,code,credits,enrolledStudentId});

    newCourse.save()
        .then(()=>res.json('Course Added'))
        .catch(err=>console.log("Error :"+err));
})

router.route('/:id').get((req,res)=>{
    Course.findById(req.params.id)
        .then(msg=>res.json(msg))
        .catch(err=>res.status(400).json('error '+err));
})

router.route('/update/:id').post((req,res)=>{
    Course.findById(req.params.id).then(course=>{
        course.instructor = req.body.instructor

        course.save().then(res.send("Course updated"))
    })

})

router.route('/update/:courseid/:stuid').post((req,res)=>{
    User.findById(req.params.stuid).then(user=>{
        Course.findById(req.params.courseid).then(course=>{
            course.enrolledStudentId.push(user._id);
            course.save();
        }).then(res.send("Student added to course"))
    })
})

router.route('/:id').delete((req,res)=>{
    Course.findByIdAndDelete(req.params.id)
        .then(msg=>res.json("Message deleted"))
        .catch(err=>res.status(400).json('error '+err));
})

module.exports = router;