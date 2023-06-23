import express from "express"
import {handleListUsers,
        handleAddUser,
        handleDeleteUser,
        handleEditUser} from '../controllers/userCntroller.js'

const router = express.Router()

router.get('/list', handleListUsers)
router.post('/add', handleAddUser)
router.delete("/delete/:id", handleDeleteUser)
router.put("/edit", handleEditUser)




export default router