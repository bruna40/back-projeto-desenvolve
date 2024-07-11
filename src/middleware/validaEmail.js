export function validaEmail(req, res, nextl) {
  const { email } = req.body

  // Verifica se o email está presente e é uma string
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Invalid email' })
  }

  // Expressão regular para validar o formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  nextl()
}
