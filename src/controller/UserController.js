import User from '../models/UserModel.js'
import bcrypt from 'bcryptjs'

export const createUser = async (req, res) => {
  const { name, email, passwordHash } = req.body

  try {
    const hashedPassword = await bcrypt.hash(passwordHash, 6)

    const userWithEmail = await User.findOne({ email })
    if (userWithEmail) {
      return res.status(400).send({ message: 'Email já cadastrado' })
    }

    const user = new User({ name, email, passwordHash: hashedPassword }) // Corrected to use 'passwordHash'
    await user.save()

    res.status(201).send(user) // Returns the created user
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: 'Erro ao cadastrar usuário' })
  }
}
