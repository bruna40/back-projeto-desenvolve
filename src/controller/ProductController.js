import { ProductService } from '../Services/ProductService.js'

export class ProductController {
  static async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query

      const startIndex = (page - 1) * limit
      const endIndex = page * limit

      const totalProducts = await ProductService.getNUmberProducts()
      const products = await ProductService.getAllProducts(startIndex, limit)

      const pagination = {
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalProducts / limit),
        totalProducts,
      }

      if (endIndex < totalProducts) {
        pagination.nextPage = parseInt(page) + 1
      }

      if (startIndex > 0) {
        pagination.previousPage = parseInt(page) - 1
      }

      res.status(200).json({ products, pagination })
    } catch (error) {
      console.error('Error in getting products:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async createProduct(req, res) {
    try {
      // eslint-disable-next-line camelcase
      const { brand, name, price, image_link } = req.body
      const newProduct = await ProductService.create({
        brand,
        name,
        price,
        // eslint-disable-next-line camelcase
        image_link,
      })
      res.status(201).json(newProduct)
    } catch (error) {
      console.error('Error in creating product:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}
