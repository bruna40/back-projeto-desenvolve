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

  // eslint-disable-next-line camelcase
  static async create({ brand, name, price, image_link }) {
    const createProduct = await Product.create({
      brand,
      name,
      price,
      // eslint-disable-next-line camelcase
      image_link,
    })
    return createProduct
  }

  static async getById(id) {
    const product = await Product.findById(id)
    return product
  }

  static async updateProduct(id, update) {
    const updatedProduct = await Product.findByIdAndUpdate(id, update, {
      new: true,
    })
    return updatedProduct
  }
}
