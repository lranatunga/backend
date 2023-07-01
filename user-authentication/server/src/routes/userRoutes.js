import express from 'express'

import {handleUserRegister,
        handleUserLogin,
        handleFogotPassword,
        handleResetPassword} from '../controllers/userController.js'

const router = express.Router()

router.post('/register', handleUserRegister)
router.post('/login', handleUserLogin)
router.post('/fogotpassword', handleFogotPassword)
router.put('/resetpassword/:resetpasswordtoken', handleResetPassword)


export default router