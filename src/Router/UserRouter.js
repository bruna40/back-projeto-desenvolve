import { UserController } from '../controller/UserController.js'
import { Router } from 'express'

const router = Router()

router.get('/user', (req, res) => {
  UserController.getAll(req, res)
})
router.get('/user/:id', (req, res) => {
  UserController.getUserById(req, res)
})

router.post('/user', (req, res) => {
  UserController.createUser(req, res)
})

router.put('/user/:id', (req, res) => {
  UserController.updateUser(req, res)
})

router.delete('/user/:id', (req, res) => {
  UserController.deleteUser(req, res)
})

export default router
