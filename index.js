const express=require('express');
const mongoose=require('mongoose')
const errorHandler=require('./common/errorHandler')
const app=express();
const cors=require('cors')


app.use(express.json())
app.use(cors())
// mongodb connected
mongoose.connect('mongodb+srv://Umesh123:Umesh123@cluster0.moi8u.mongodb.net/expertron?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log("error occure while mongodb connection");
    }
    console.log("mongodb connected");
})

// sending api
app.use('/api',require('./api/index'))

app.use(errorHandler);

// server listening on port 5000
app.listen(process.env.PORT || 5000,()=>console.log("app is up and running"))