import express from 'express'
import { sendEmailController } from '../controller/EmailContoller.js'

const router = express.Router()

// Rota para enviar e-mail
router.post('/send-email', sendEmailController)

export default router
