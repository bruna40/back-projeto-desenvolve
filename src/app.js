import express from 'express'
import { dbConnect } from './config/dbConnect.js'
import UserRouter from './Router/UserRouter.js'
import cors from 'cors'

dbConnect()

const app = express()

app.use(express.json())
app.use(UserRouter)
app.use(cors())

export default app
