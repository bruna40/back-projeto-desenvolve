import User from '../models/UserModel.js'

export class UserRepository {
  async create({ name, email, passwordHash }) {
    try {
      // Criando um novo usuário usando o modelo User definido com Mongoose
      const newUser = await User.create({
        name,
        email,
        passwordHash,
      })

      return newUser
    } catch (error) {
      throw new Error()
    }
  }

  async findByEmail(email) {
    try {
      const userWithEmail = await User.findOne({ email })
      return userWithEmail
    } catch (error) {
      console.error('Erro ao buscar usuário por email:', error)
      throw error
    }
  }
}
