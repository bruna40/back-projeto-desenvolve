import mongoose from 'mongoose'

export function errServer(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    return res.status(400).json({ error: 'one or more invalidated data' })
  }
  res.status(500).json({ error: 'Internal server error' })
  next()
}
