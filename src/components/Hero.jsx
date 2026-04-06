import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white pt-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Experience The True Taste of India
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-8 text-gray-200"
        >
          Fresh ingredients. Authentic recipes. Unforgettable flavors.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-x-4"
        >
          <a
            href="#menu"
            className="bg-red-600 px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition duration-300"
          >
            View Menu
          </a>

          <a
            href="#contact"
            className="border border-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Book Table
          </a>
        </motion.div>

      </div>
    </section>
  )
}