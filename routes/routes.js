const express=require('express');
const router=express.Router();


const index=require('./index');
const login=require('./login');
const registro=require('./registro');
const mensajes=require('./chat');


router.use('/',index);
router.use('/api',login);
router.use('/api',registro);
router.use('/api',mensajes);

module.exports=router;
