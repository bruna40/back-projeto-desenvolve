import { UserRepository } from '../repositories/UserRepository'
import bcrypt from 'bcryptjs'

export class AuthenticateService {
  constructor() {
    this.usersRepository = UserRepository
  }

  async execute({ email, password }) {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new Error(`User ${email} not found`)
    }
    const hasPasswordMatches = await bcrypt.compare(password, user.passwordHash)

    if (hasPasswordMatches) {
      throw new Error(`Invalid password`)
    }

    return user
  }
}
