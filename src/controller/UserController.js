import { UserService } from '../Services/UserService.js'

const userService = new UserService()

export const userCreate = async (req, res) => {
  const { name, email, password } = req.body

  try {
    await userService.createUser({ name, email, password })
    res.status(201).send({ message: 'Usuário cadastrado com sucesso' })
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)

    if (error.message.includes('Email')) {
      res.status(409).send({ error: 'Email já cadastrado' })
    } else {
      res.status(500).send({ error: 'Erro interno do servidor' })
    }
  }
}
