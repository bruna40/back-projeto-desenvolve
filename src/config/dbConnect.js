import mongoose from 'mongoose'

export async function dbConnect() {
  mongoose.connect(
    'mongodb+srv://brunasanthiago:admin123@cluster0.52wswb1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  return mongoose.connection
}
