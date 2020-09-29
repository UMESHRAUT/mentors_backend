const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const taskSchema=new Schema({
    task_title:{
        type:String,
        required:true
    },
    task_description:{
        type:String,
        required:true
    },
    tobe_performed_on:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type:String,
        default:"pending"
    }
})

module.exports=mongoose.model("task",taskSchema);