import express from "express"
import Order from "../models/Order.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// PLACE ORDER
router.post("/", protect, async (req, res) => {

  const { items, totalPrice } = req.body

  const order = new Order({
    user: req.user.id,
    items,
    totalPrice
  })

  await order.save()

  res.json({
    message: "Order placed successfully",
    order
  })
})


// GET USER ORDERS
router.get("/", protect, async (req, res) => {

  const orders = await Order.find({ user: req.user.id }).populate("items.menuItem")

  res.json(orders)

})

export default router