import Product from '../models/ProductModel.js'

export class ProductService {
  static async getAllProducts(startIndex, limit) {
    try {
      const products = await Product.find({})
        .skip(startIndex)
        .limit(parseInt(limit))
      return products
    } catch (error) {
      console.error('Error in getting products:', error)
      throw error
    }
  }

  static async getNUmberProducts() {
    const totalProducts = await Product.countDocuments().exec()
    return totalProducts
  }
}
