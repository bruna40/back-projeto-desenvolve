import mongoose from 'mongoose'

const EmailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    sentAt: { type: Date, default: Date.now },
  },
  { versionKey: false },
)

export default mongoose.model('Email', EmailSchema)
