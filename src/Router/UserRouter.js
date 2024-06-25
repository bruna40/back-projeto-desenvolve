import { createUser } from '../controller/UserController.js'
import { Router } from 'express'

const router = Router()

router.post('/user', createUser)

export default router
