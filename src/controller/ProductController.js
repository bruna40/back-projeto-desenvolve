import { ProductService } from '../Services/ProductService.js'

export class ProductController {
  static async getAll(req, res, next) {
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
      next(error)
    }
  }

  static async createProduct(req, res, next) {
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
      next(error)
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params
      const product = await ProductService.getById(id)
      if (!product) {
        res.status(404).json({ error: 'Product not found' })
      } else {
        res.status(200).json(product)
      }
    } catch (error) {
      next(error)
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params
      await ProductService.updateProduct(id, req.body)
      res.status(204).end()
    } catch (error) {
      next(error)
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params
      await ProductService.deleteProduct(id)
      res.status(204).end()
    } catch (error) {
      next(error)
    }
  }
}
