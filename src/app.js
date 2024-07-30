import express from 'express'
import { dbConnect } from './config/dbConnect.js'
import UserRouter from './Router/UserRouter.js'
import ProductRouter from './Router/ProductRouter.js'
import cors from 'cors'
import { errServer } from './middleware/errServer.js'
import { notFound } from './middleware/notFound.js'

dbConnect()

const app = express()

app.use(
  cors({
    origin: 'http://127.0.0.1:5500', // Permite apenas o domínio do seu frontend
  }),
)

app.use(express.json())
app.use(UserRouter)
app.use(ProductRouter)

app.use(errServer)
app.use(notFound)

export default app
