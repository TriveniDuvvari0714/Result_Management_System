const alert = require('alert');
const Students = require('../models/student');


const teachAdd_get = (req, res) => {
    res.render("teacher/addstudent");
};
const teachAdd_post = async (req, res) => {
    const singleStudent = new Students({
        name : req.body.name,  
        roll : req.body.roll,             
        dob : req.body.dob,
        score : req.body.score        
    })
    try {
        const newStudent = await singleStudent.save();
        res.redirect("/teacher/add");
      } catch {
        res.send("error")
    }
};

const teachOptions_get = (req,res) => {
    res.render("teacher/option")
};

const teachLogin_get = (req, res) => {
    res.render("teacher/teacherLogin");
};

const teachLogin_post = (req, res) => {
    if(req.body.password == "teacher"){
        res.redirect("/teacher/option");
    }
    else{
        res.render("teacher/teacherLogin")
        alert("Please Enter Correct Password")
    }
};

const teachDelete_get =async (req, res) => {
    await Students.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
};

const teachViewall_get = async (req, res) => {
    const allStudents = await Students.find() 
    res.render("teacher/viewall", {student : allStudents})
};

const teachEdit_get =async (req, res) => {
    const user = await Students.findById(req.params.id)
    res.render("teacher/edit", {user : user})
};
const teachEdit_post =async (req, res) => {
    const user = await Students.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher/viewall")
};

module.exports={
    teachLogin_get,
    teachLogin_post,
    teachViewall_get,
    teachEdit_get,
    teachEdit_post,
    teachDelete_get,
    teachAdd_post,
    teachAdd_get,
    teachOptions_get
}