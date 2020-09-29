const express=require('express');
const apiRouter=express.Router();
var mentorRouter=require('./mentor/mentor');
var taskRouter=require('./task/task');
var adminRouter=require('./admin/admin');

apiRouter.use('/admin/',adminRouter)
apiRouter.use('/mentor/',mentorRouter)
apiRouter.use('/task/',taskRouter)


module.exports=apiRouter;