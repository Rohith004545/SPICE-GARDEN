import mongoose from "mongoose"

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  image: String,
  category: String
})

export default mongoose.model("Menu", menuSchema)