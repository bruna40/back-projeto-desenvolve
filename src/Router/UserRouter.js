import { userCreate } from '../controller/UserController.js'
import { Router } from 'express'

const router = Router()

router.post('/user', userCreate)

export default router
