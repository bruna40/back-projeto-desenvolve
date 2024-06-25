import User from '../models/UserModel.js'

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}
