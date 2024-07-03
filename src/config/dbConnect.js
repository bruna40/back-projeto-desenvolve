import mongoose from 'mongoose'
import 'dotenv/config'

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Conexão com MongoDB Atlas estabelecida com sucesso.')
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB Atlas:', error)
  }
}
