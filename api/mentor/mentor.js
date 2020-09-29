const express=require('express');
const router=express.Router();
const controller=require('./mentorController');
const taskController=require('../task/taskController')
const workController=require('./workExperiance/controllers')

console.log("reaching mentro model");
router.param('id',controller.idParams)
router.route('/:id')
    .post(controller.register)
    .get(controller.login)

router.route('/')
    .get(controller.getMentor)

router.route('/work/:id')
    .post(workController.addWork)
module.exports=router;