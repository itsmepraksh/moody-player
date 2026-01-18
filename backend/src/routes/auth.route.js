const express = require('express')
const { registerController, loginController, logoutController, deleteAcController } = require('../controller/auth.controller')
const router = express.Router()

router.get('/health',(req,res)=>{
    res.send('its working kanhaji')
})

router.post('/login',loginController)

router.post('/register',registerController)

router.get('/logout',logoutController)

router.delete('/deleteAc/:id',deleteAcController)

module.exports = router