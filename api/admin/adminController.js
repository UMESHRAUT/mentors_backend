const adminModel = require("./adminModel")
const bcrypt=require('bcrypt')
const mentorModel = require("../mentor/mentorModel")
exports.register=async(req,res,next)=>{

    try {
        const hashedPassword=await bcrypt.hash(req.body.password,10)

        const newAdmin=new adminModel({
            admin_name:req.body.admin_name,
            email:req.body.email,
            password:hashedPassword
        })
    
        newAdmin.save().then(d=>res.json(d)).catch(err=>res.json(err));
    } catch (error) {
        res.json(error)
    }

}

exports.getMentors=async(req,res,next)=>{

    try {
       const mentors=await mentorModel.find({});
        res.json(mentors)
    } catch (error) {
        res.json(error)
    }

}

exports.login=async(req,res,next)=>{
    const{email,password}=req.query;
    console.log(email);
    const user=await adminModel.findOne({email:email})
    try {
        if(await bcrypt.compare(password,user.password)){
            res.send(user)
        }else{
            res.json("password not match")
        }    
    } catch (error) {
        res.json("not get user")
    }
}
