import { Router } from 'express'
import { UserController } from '../controller/UserController.js'
import { validacaoNome } from '../middleware/validacaoNome.js'
import { validaEmail } from '../middleware/validaEmail.js'

const router = Router()

router
  .get('/user', UserController.getAll)
  .get('/user/:id', UserController.getUserById)
  .post('/user', validacaoNome, validaEmail, UserController.createUser)
  .delete('/user/:id', UserController.deleteUser)

export default router
