import express from 'express'
import { dbConnect } from './config/dbConnect.js'
import UserRouter from './Router/UserRouter.js'
import cors from 'cors'

const connection = await dbConnect()
connection.on('error', console.error.bind(console, 'connection error:'))

connection.once('open', function () {
  console.log('Connected to database')
})

const app = express()

app.use(express.json())
app.use(UserRouter)
app.use(cors())

export default app
