import Product from '../models/ProductModel.js'

export class ProductService {
  // eslint-disable-next-line camelcase
  async createProduct({ brand, name, price, image_link }) {
    try {
      const product = await Product.create({
        brand,
        name,
        price,
        // eslint-disable-next-line camelcase
        image_link,
      })

      return product
    } catch (error) {
      console.error('Error in creating product:', error)
      throw error
    }
  }

  static async getAllProducts(startIndex, limit) {
    try {
      const products = await Product.find({}).skip(startIndex).limit(limit)
      return products
    } catch (error) {
      console.error('Error in getting products:', error)
      throw error
    }
  }

  static async getNumberProducts() {
    try {
      const totalProducts = await Product.countDocuments()
      return totalProducts
    } catch (error) {
      console.error('Error in getting number of products:', error)
      throw error
    }
  }
}
