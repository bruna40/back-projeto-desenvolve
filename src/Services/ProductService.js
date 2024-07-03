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

  static async getAllProducts() {
    try {
      const products = await Product.find() // Utiliza Mongoose para buscar todos os produtos
      return products
    } catch (error) {
      console.error('Error in getting products:', error)
      throw error // Lança o erro para ser tratado pelo controlador ou outra parte da aplicação
    }
  }
}
