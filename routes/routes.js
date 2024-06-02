const express=require('express');
const router=express.Router();


const index=require('./index');
const login=require('./login');
const registro=require('./registro');


router.use('/',index);
router.use('/api',login);
router.use('/api',registro);


module.exports=router;
