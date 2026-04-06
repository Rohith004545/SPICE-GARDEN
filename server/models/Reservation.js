import mongoose from "mongoose"

const reservationSchema = new mongoose.Schema(
{
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  guests: {
    type: Number,
    required: true
  }
},
{ timestamps: true }
)

export default mongoose.model("Reservation", reservationSchema)