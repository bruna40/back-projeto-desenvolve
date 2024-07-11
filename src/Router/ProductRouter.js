import { Router } from 'express'
import { ProductController } from '../controller/ProductController.js'

const router = Router()

router
  .get('/products', ProductController.getAll)
  .get('/products/:id', ProductController.getProductById)
  .post('/products', ProductController.createProduct)
  .put('/products/:id', ProductController.updateProduct)
  .delete('/products/:id', ProductController.deleteProduct)

export default router
