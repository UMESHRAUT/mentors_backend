const mentorModel = require("../mentor/mentorModel");
const taskModel = require("./taskModel");


exports.idParams=function(req,res,next,id){
    mentorModel.findById(id)
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


exports.addTask=(req,res,next)=>{
    console.log("reaching add task");
    const{task_title,task_description,tobe_performed_on}=req.body;
    console.log(req.body);
    console.log(req.mentor._id);
    const newTask=new taskModel({
        task_title,
        task_description,
        tobe_performed_on,
    })
    newTask.save().then(()=>mentorModel.update({_id:req.mentor._id},{$push:{task:newTask._id}}).then(d=>res.json(d)).catch(e=>res.json(e))).catch(err=>res.json(err.message))
    console.log(req.mentor._id);
}

exports.getTask=async(req,res,next)=>{
    console.log("reaching get task");
    mentorModel.find({_id:req.mentor._id}).populate({path:'task',model:"task"}).exec((err,task)=>{
        res.json(task)
    })
    console.log(req.mentor._id);
}

exports.UpdateTask=(req,res,next)=>{
    const update=req.body;
    console.log(update);
    console.log(req.query.task_id);
    taskModel.findByIdAndUpdate(req.query.task_id,update,{new:true}).then(d=>res.json(d));
}


exports.DeleteTask=(req,res,next)=>{

    console.log(req.query.task_id);
    taskModel.findByIdAndDelete(req.query.task_id).then(d=>res.json(d)).catch(err=>res.json(err))
}


