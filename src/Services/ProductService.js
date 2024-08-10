import Product from '../models/ProductModel.js'

export class ProductService {
  static async getAllProducts(startIndex, limit, search) {
    try {
      const query = search ? { name: { $regex: search, $options: 'i' } } : {}
      return await Product.find(query).skip(startIndex).limit(limit)
    } catch (error) {
      throw new Error('Error getting products')
    }
  }

  static async getNumberProducts(search) {
    try {
      const query = search ? { name: { $regex: search, $options: 'i' } } : {}
      return await Product.countDocuments(query)
    } catch (error) {
      throw new Error('Error getting number of products')
    }
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

  static async deleteProduct(id) {
    const deletedProduct = await Product.findByIdAndDelete(id)
    return deletedProduct
  }
}
