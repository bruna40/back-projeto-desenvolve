import mongoose from 'mongoose'
import 'dotenv/config'

export async function dbConnect() {
  const connection = mongoose.connection
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    console.log('Conexão com MongoDB estabelecida com sucesso.')
    connection.once('open', function () {
      console.log('Connected to database')
    })
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error)
    connection.on('error', console.error.bind(console, 'connection error:'))
  }
}
