import { expect, test, describe } from 'vitest'
import { UserService } from './UserService.js'
import { UserRepository } from '../repositories/UserRepository.js'
import bcrypt from 'bcryptjs'

console.log('Iniciando teste...')

describe('User Service', () => {
  test(
    'should hash user password upon registration',
    async () => {
      const userRepository = new UserRepository()
      const userService = new UserService(userRepository)

      try {
        const user = await userService.createUser({
          name: 'John Doe',
          email: 'johndoe@example.com',
          passwordHash: '123456',
        })
        console.log('User criado:', user)

        // Verificar se a senha foi corretamente criptografada
        const isPasswordHashed = await bcrypt.compare(
          '123456',
          user.passwordHash,
        )
        expect(isPasswordHashed).toBe(true)
      } catch (error) {
        console.error('Erro durante a criação do usuário:', error)
        throw error // Re-lança o erro para falhar o teste
      }
    },
    { timeout: 20000 }, // Aumenta o timeout para 10 segundos
  )
})
