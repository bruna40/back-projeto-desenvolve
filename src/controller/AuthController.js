import AuthService from '../services/AuthService'

export class AuthController {
  static async login(req, res) {
    const { email, senha } = req.body

    try {
      const login = await AuthService.login({ email, senha })

      res.status(200).send(login)
    } catch (error) {
      res.status(401).send({ message: error.message })
    }
  }
}
