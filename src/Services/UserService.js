import User from '../models/UserModel.js'

export class UserService {
  static async getAllUsers() {
    try {
      const users = await User.find({})
      return users
    } catch (error) {
      console.error('Error in getting users:', error)
      throw error
    }
  }

  static async create({ name, email, passwordHash }) {
    const createUser = await User.create({
      name,
      email,
      passwordHash,
    })
    return createUser
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

  static async deleteUser(id) {
    const deletedUser = await User.findByIdAndDelete(id)
    return deletedUser
  }
}
