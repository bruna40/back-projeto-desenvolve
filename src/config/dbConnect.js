import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() // Ensure this is at the top

export async function dbConnect() {
  const DB_CONNECTION_STRING =
    'mongodb+srv://brunasantiago:admin123@cluster.rbk79nw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
  console.log('DB_CONNECTION_STRING:', DB_CONNECTION_STRING) // Debugging line

  if (!DB_CONNECTION_STRING) {
    throw new Error('Database connection string is not defined')
  }

  try {
    await mongoose.connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error)
    throw error // Rethrow to handle higher up
  }
}
