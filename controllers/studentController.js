const alert = require('alert');
const Student = require('../models/student');

const studLogin_get = (req, res) => {
       res.render("student/login");
    };

const studLogin_post = async (req, res) => {

        const Sturoll = req.body.roll;   
        const individualStudent = await Student.findOne({roll : Sturoll});    
        if(!individualStudent){
          res.render("student/login")
          alert("Login with correct Roll number")
        }      
        res.render("student/view", { one : individualStudent});
    };

module.exports={
    studLogin_get,
    studLogin_post
}