const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const workSchema=new Schema({
    company_name:{
        type:String,
        required:true,
        unique:true
    },
    job_description:{
        type:String,
        required:true
    },
    years_of_experiance:{
        type:Number,
        required:true,
        default:1
    }
})

module.exports=mongoose.model("work",workSchema);


