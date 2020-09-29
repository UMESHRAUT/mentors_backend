const express=require('express');
const router=express.Router();
const controller=require('./adminController');

router.route('/')
    .post(controller.register)
    .get(controller.login)

router.route('/mentor')
    .get(controller.getMentors)



module.exports=router;