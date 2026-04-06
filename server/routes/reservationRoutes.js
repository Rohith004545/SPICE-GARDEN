import express from "express"
import Reservation from "../models/Reservation.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// Create reservation
router.post("/", protect, async (req, res) => {
  try {

    const { date, time, guests } = req.body

    const reservation = new Reservation({
      user: req.user.id,
      date,
      time,
      guests
    })

    const savedReservation = await reservation.save()

    res.json({
      message: "Reservation created successfully",
      reservation: savedReservation
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router