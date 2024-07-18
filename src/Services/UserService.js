import User from '../models/UserModel.js'

export class UserService {
  static async getAllUsers() {
    try {
      const users = await User.findActive()
      return users
    } catch (error) {
      console.error('Error in getting users:', error)
      throw error
    }
  }

  static async create({ name, email, passwordHash }) {
    try {
      const existingUser = await User.findOne({ email })

      if (existingUser) {
        return { error: 'User already exists' }
      }
      const newUser = await User.create({
        name,
        email,
        passwordHash,
      })

      return newUser
    } catch (error) {
      console.error(error)
      throw new Error('Error creating user')
    }
  }

  static async getById(id) {
    const user = await User.findById(id)
    return user
  }

  static async updateUser(id, update) {
    const updatedUser = await User.findByIdAndUpdate(id, update, {
      new: true,
    })
    return updatedUser
  }

  static async softDeleteUser(id) {
    const deletedUser = await User.findByIdAndUpdate(id, { isDeleted: true })
    return deletedUser
  }
}
