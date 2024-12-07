const express=require('express')
const{loginuser}=require('../controllers/login')
const router=express.Router()

router.route('/').post(loginuser)

module.exports=router



