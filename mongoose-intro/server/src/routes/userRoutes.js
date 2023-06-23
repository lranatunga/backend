import express from "express"
import {handleListUsers,
        handleAddUser} from '../controllers/userCntroller.js'

const router = express.Router()

router.get('/list', handleListUsers)
router.post('/add', handleAddUser)



export default router