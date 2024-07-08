import bcrypt from 'bcryptjs'
import User from '../models/UserModel.js'

export class UserService {
  async createUser({ name, email, password }) {
    try {
      const userWithEmail = await this.findByEmail(email)
      if (userWithEmail) {
        throw new Error(`Email ${email} already exists`)
      }

      if (typeof password !== 'string') {
        throw new Error('Password must be a string')
      }

      const hashedPassword = await bcrypt.hash(password, 6)

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      })

      return user
    } catch (error) {
      console.error('Error in creating user:', error)
      throw error
    }
  }

  async findByEmail(email) {
    try {
      const userWithEmail = await User.findOne({ email })
      return userWithEmail
    } catch (error) {
      console.error('Error finding user by email:', error)
      throw error
    }
  }
}
