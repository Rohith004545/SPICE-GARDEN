import express from "express"
import Menu from "../models/Menu.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// GET ALL MENU ITEMS
router.get("/", async (req, res) => {
  const menu = await Menu.find()
  res.json(menu)
})

// ADD MENU ITEM (Protected)
router.post("/", protect, async (req, res) => {
  const { name, description, price, category } = req.body

  const item = new Menu({
    name,
    description,
    price,
    category
  })

  await item.save()

  res.json({
    message: "Menu item added",
    item
  })
})

export default router