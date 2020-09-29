const express=require('express');
const router=express.Router();
const controller=require('./taskController')

router.param('id',controller.idParams)


router.route('/:id')
    .post(controller.addTask)
    .get(controller.getTask)
    
router.route('/')
    .delete(controller.DeleteTask)
    .put(controller.UpdateTask)
    


module.exports=router;