import mongoose from 'mongoose'

export async function dbConnect() {
  try {
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB Atlas:', error)
  }
}
