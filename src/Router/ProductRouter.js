import { Router } from 'express'
import { ProductController } from '../controller/ProductController.js'

const router = Router()

router.get('/products', ProductController.getAll)
router.get('/products/:id', ProductController.getProductById)
router.post('/products', ProductController.createProduct)
router.put('/products/:id', ProductController.updateProduct)
router.delete('/products/:id', ProductController.deleteProduct)

export default router
