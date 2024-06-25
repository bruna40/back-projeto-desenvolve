import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
)

export default mongoose.model('User', UserSchema)
