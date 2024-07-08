import { ProductService } from '../Services/ProductService.js'

export const getAll = async (req, res) => {
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
