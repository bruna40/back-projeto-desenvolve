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

      console.log('Novo usuário criado:', newUser)
      return newUser
    } catch (error) {
      // Tratamento de erros
      console.error('Erro ao criar usuário:', error)
      throw error
    }
  }
}
