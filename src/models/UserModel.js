import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
)

UserSchema.pre(/^find/, function (next) {
  this.where({ isDeleted: false })
  next()
})

UserSchema.statics.findActive = function () {
  return this.find({ isDeleted: false })
}

UserSchema.statics.findOneActive = function (filter) {
  return this.findOne({ ...filter, isDeleted: false })
}

UserSchema.index({ isDeleted: 1 })

export default mongoose.model('User', UserSchema)
