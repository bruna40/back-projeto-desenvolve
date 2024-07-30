import database from '../models'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

export class AuthService {
  async login(dto) {
    const usuario = await database.usuarios.findOne({
      attributes: ['id', 'email', 'senha'],
      where: {
        email: dto.email,
      },
    })

    if (!usuario) {
      throw new Error('Usuario não cadastrado')
    }

    const senhaIguais = await compare(dto.senha, usuario.senha)

    if (!senhaIguais) {
      throw new Error('Usuario ou senha invalido')
    }

    const accessToken = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      },
    )

    return { accessToken }
  }
}
