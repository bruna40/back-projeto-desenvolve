import { Router } from 'express'
import { getAll } from '../controller/ProductController.js'

const router = Router()

// Rota GET para buscar todos os produtos
router.get('/products', getAll)

export default router
