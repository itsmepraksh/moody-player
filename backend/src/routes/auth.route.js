const express = require('express')
const { registerController, loginController } = require('../controller/auth.controller')
const router = express.Router()

router.get('/health',(req,res)=>{
    res.send('its working kanhaji')
})

router.post('/login',loginController)

router.post('/register',registerController)

router.get('/logout',loginController)

module.exports = router