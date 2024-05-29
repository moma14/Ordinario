const express=require('express');
const router=express.Router();


const index=require('./index');
const login=require('./login');
const registro=require('./registro');


router.use('/',index);
router.use('/login',login);
router.use('/registro',registro);


module.exports=router;
