const mentorModel = require("./mentorModel");
const bcrypt=require('bcrypt');
const logger = require("../../common/logger");

exports.idParams=function(req,res,next,id){
    console.log(id);
    mentorModel.findById({_id:id})
        .then(function(mentor){
            if(!mentor){
                next(new Error("NOT FOUND"));
            }else{
                req.mentor=mentor;
                next();
            }
        },function(err){
            next(err);
        })
}


exports.register=async(req,res,next)=>{
    console.log("hear");
     try {
         const hashedPassword=await bcrypt.hash(req.body.password,10)
          const{mentor_name,mentor_description,email}=req.body;
         const newAdmin=new mentorModel({
               mentor_name:mentor_name,
               mentor_description:mentor_description,
               email:email,
               password:hashedPassword
         })
         logger.log(newAdmin)
         newAdmin.save().then(d=>res.json(d)).catch(err=>res.json(err));
     } catch (error) {
         res.json("error while saving")
     }
 }
 

exports.login=async(req,res,next)=>{
    const{email,password}=req.query;
    console.log(email);
    const user=await mentorModel.findOne({email:email})
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

exports.getMentor=async(req,res,next)=>{
    const{id}=req.query;
    console.log(id);
    
    try {
        const user=await mentorModel.findOne({_id:id}).populate({path:'task',model:"task"})
        res.send(user)
    } catch (error) {
        res.json("not get user")
    }
}

