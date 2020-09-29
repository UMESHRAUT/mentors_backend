const mentorModel = require("../mentorModel");
const workExpModel=require("./experianceModel");

exports.addWork=(req,res,next)=>{
    const {company_name,job_description,years_of_experiance}=req.body;
    const newWorkExp=new workExpModel({
        company_name,
        job_description,
        years_of_experiance
    })
    req.mentor.work_experiance.push(newWorkExp._id);
    newWorkExp.save().then(d=>res.json(d)).catch(err=>res.json(err));
}


exports.updateWork=(req,res,next)=>{
    const {company_name,job_description,years_of_experiance}=req.body;
    const newWorkExp=new workExpModel({
        company_name,
        job_description,
        years_of_experiance
    })
    req.mentor.work_experiance.push(newWorkExp._id);
    newWorkExp.save().then(d=>res.json(d)).catch(err=>res.json(err));
}
