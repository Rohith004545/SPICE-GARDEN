import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import { protect } from "./middleware/authMiddleware.js"
import menuRoutes from "./routes/menuRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import reservationRoutes from "./routes/reservationRoutes.js"

dotenv.config()

const app = express()

app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"]
}))

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/reservations", reservationRoutes)

app.use("/api/menu", menuRoutes)
app.use("/api/orders", orderRoutes)

// TEST ROUTE
app.get("/", (req,res)=>{
  res.send("Spice Garden API Running 🚀")
})


// PROTECTED ROUTE
app.get("/api/profile", protect, (req,res)=>{
  res.json({
    message: "Protected route accessed",
    user: req.user
  })
})


// DATABASE CONNECTION
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected")
  } catch (error) {
    console.log("MongoDB connection error:", error)
    process.exit(1)
  }
}

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})