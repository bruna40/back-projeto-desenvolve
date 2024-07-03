import { UserService } from '../Services/UserService.js'
import { UserRepository } from '../repositories/UserRepository.js'

export const userCreate = async (req, res) => {
  const { name, email, passwordHash } = req.body
  const userRepository = new UserRepository()

  try {
    const userService = new UserService(userRepository)

    await userService.createUser({ name, email, passwordHash })

    res.status(201).send({ message: 'Usuário cadastrado com sucesso' })
  } catch (error) {
    // Trata os erros apropriadamente
    console.error('Erro ao cadastrar usuário:', error)

    if (error.message.includes('Email')) {
      res.status(409).send({ error: 'Email já cadastrado' })
    } else {
      res.status(500).send({ error: 'Erro interno do servidor' })
    }
  }
}
