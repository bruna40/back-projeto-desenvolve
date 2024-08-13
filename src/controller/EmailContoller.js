import { sendEmail } from '../config/emailConfig.js'

/**
 * Controlador para enviar e-mail.
 * @param {Object} req - Requisição HTTP contendo o e-mail do destinatário.
 * @param {Object} res - Resposta HTTP.
 */
export async function sendEmailController(req, res) {
  const { to } = req.body

  if (!to) {
    return res
      .status(400)
      .json({ error: "Please provide the recipient's email address." })
  }

  try {
    const result = await sendEmail(to)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
