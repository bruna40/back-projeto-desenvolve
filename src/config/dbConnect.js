import mongoose from 'mongoose'
import 'dotenv/config'

export async function dbConnect() {
  try {
    mongoose.connect(
      'mongodb+srv://brunasantiago:admin123@cluster.rbk79nw.mongodb.net/Dev?retryWrites=true&w=majority&appName=Cluster',
    )

    return mongoose.connection
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB Atlas:', error)
  }
}
