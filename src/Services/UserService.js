import bcrypt from 'bcryptjs'
import { UserRepository } from '../repositories/UserRepository.js'

export class UserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async createUser({ name, email, passwordHash }) {
    try {
      const userWithEmail = await this.userRepository.findByEmail(email)
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
