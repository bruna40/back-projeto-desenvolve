import { Router } from 'express'
import { ProductController } from '../controller/ProductController.js'

const router = Router()

router.get('/products', (req, res) => {
  ProductController.getAll(req, res)
})

router.post('/products', (req, res) => {
  ProductController.createProduct(req, res)
})

export default router
