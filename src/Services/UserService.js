import User from '../models/UserModel.js'
import bcrypt from 'bcryptjs'

export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async createUser({ name, email, passwordHash }) {
    try {
      const userWithEmail = await User.findOne({ email })
      if (userWithEmail) {
        throw new Error(`Email ${email} already exists`)
      }

      const hashedPassword = await bcrypt.hash(passwordHash, 6)

      const user = await this.userRepository.create({
        name,
        email,
        passwordHash: hashedPassword,
      })

      return { user }
    } catch (error) {
      console.error('Error in creating user:', error)
      throw error
    }
  }
}
