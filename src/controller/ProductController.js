import { ProductService } from '../Services/ProductService.js'

export const getAll = async (req, res) => {
  try {
    // Chamando o serviço para buscar todos os produtos
    const products = await ProductService.getAllProducts()

    // Retornando os produtos como resposta com status 200 (OK)
    res.status(200).send({ products })
  } catch (error) {
    // Lidando com erros e retornando uma resposta de erro com status 500 (Internal Server Error)
    console.error('Error in getting products:', error)
    res.status(500).send({ error: 'Internal server error' })
  }
}
