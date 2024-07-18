import { UserService } from '../Services/UserService.js'

export class UserController {
  static async getAll(req, res, next) {
    try {
      const users = await UserService.getAllUsers()
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }

  static async createUser(req, res, next) {
    try {
      const user = await UserService.create(req.body)
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }

  static async getUserById(req, res, next) {
    try {
      const user = await UserService.getById(req.params.id)
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ error: 'User not found' })
      }
    } catch (error) {
      next(error)
    }
  }

  static async updateUser(req, res, next) {
    try {
      const updatedUser = await UserService.updateUser(req.params.id, req.body)
      if (updatedUser) {
        res.status(200).json(updatedUser)
      } else {
        res.status(404).json({ error: 'User not found' })
      }
    } catch (error) {
      next(error)
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const deletedUser = await UserService.softDeleteUser(req.params.id)
      if (deletedUser) {
        res.status(200).json(deletedUser)
      } else {
        res.status(404).json({ error: 'User not found' })
      }
    } catch (error) {
      next(error)
    }
  }
}
