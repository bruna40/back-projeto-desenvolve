export function validacaoNome(req, res, next) {
  const { name } = req.body

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid name' })
  }

  if (name.length < 2 || name.length > 50) {
    return res
      .status(400)
      .json({ error: 'Name must be between 2 and 50 characters long' })
  }

  if (/\d/.test(name)) {
    return res.status(400).json({ error: 'Name cannot contain numbers' })
  }

  next()
}
