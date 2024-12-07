const express=require('express')
const{createuser}=require('../controllers/signup')
const router=express.Router()

router.route('/').post(createuser)

module.exports=router



