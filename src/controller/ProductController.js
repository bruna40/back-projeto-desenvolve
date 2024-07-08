import { ProductService } from '../Services/ProductService.js'

export const getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const totalProducts = await ProductService.getNumberProducts()
    const products = await ProductService.getAllProducts(startIndex, limit)
    const pagination = {
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
    }

    if (endIndex < totalProducts) {
      pagination.nextPage = page + 1
    }

    if (startIndex > 0) {
      pagination.previousPage = page - 1
    }

    res.status(200).json({ products, pagination })
  } catch (error) {
    console.error('Error in getting products:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
