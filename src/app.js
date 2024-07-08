import express from 'express'
import { dbConnect } from './config/dbConnect.js'
import UserRouter from './Router/UserRouter.js'
import ProductRouter from './Router/ProductRouter.js'
import cors from 'cors'

const connection = await dbConnect()

connection.on('error', (err) => {
  console.error(err)
})
connection.once('open', () => {
  console.log('Connected to MongoDB')
})
const app = express()

app.use(express.json())
app.use(UserRouter)
app.use(ProductRouter)
app.use(cors())

export default app
