const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const mentorSchema=new Schema({
    mentor_name:{
        type:String,
        required:true,
        unique:true
    },
    mentor_description:{
        type:String,
        required:true
    },
    tags:[{type:String}],
    work_experiance:[{
        type:Schema.Types.ObjectId,
        ref:"work"
    }],
    task:[{
        type:Schema.Types.ObjectId,
        ref:"mentor"
    }],
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("mentor",mentorSchema);