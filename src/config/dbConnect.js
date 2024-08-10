import mongoose from 'mongoose'

export async function dbConnect() {
  const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING

  if (!DB_CONNECTION_STRING) {
    throw new Error('Database connection string is not defined')
  }

  console.log('DB_CONNECTION_STRING:', DB_CONNECTION_STRING)

  try {
    await mongoose.connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error)
    throw error
  }
}
