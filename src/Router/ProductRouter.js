import { Router } from 'express'
import { getAll } from '../controller/ProductController.js'

const router = Router()

router.get('/products', getAll)

export default router
