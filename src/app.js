import express from 'express'
import 'dotenv/config'
import { dbConnect } from './config/dbConnect.js'
// import UserRouter from './Router/UserRouter.js'
import ProductRouter from './Router/ProductRouter.js'
import emailRouter from './Router/EmailRouter.js'
import cors from 'cors'
import { errServer } from './middleware/errServer.js'
import { notFound } from './middleware/notFound.js'

dbConnect()

const app = express()

const allowedOrigins = [
  'https://1-projeto-desenvolve.vercel.app',
  'http://127.0.0.1:5500',
]

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}
app.use(cors(corsOptions))
app.use(express.json())
// app.use(UserRouter)
app.use(ProductRouter)
app.use(emailRouter) // Adicione o roteador de e-mail

app.use(errServer)
app.use(notFound)

export default app
