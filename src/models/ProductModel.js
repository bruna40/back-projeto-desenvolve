import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    brand: { type: String },
    name: { type: String, required: true },
    price: { type: String },
    image_link: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
)

const ProductModel = mongoose.model('Product', ProductSchema)

export default ProductModel
