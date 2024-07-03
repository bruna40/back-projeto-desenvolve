import Product from '../models/ProductModel.js'
import produtos from '../../product.json' assert { type: 'json' }
import { dbConnect } from '../config/dbConnect.js'

async function seedProdutos() {
  try {
    await dbConnect()
    await Product.deleteMany()
    await Product.insertMany(produtos)
    console.log('Seed de produtos executado com sucesso!')
  } catch (err) {
    console.error('Erro ao executar seed de produtos:', err)
  }
}

seedProdutos()
