import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Menu from "./components/Menu"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import Cart from "./components/Cart"
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Orders from "./components/Orders"

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Register />
//       <Login />
//       <About />
//       <Orders />
//       <Menu />
//       <Gallery />
//       <Testimonials />
//       <Contact />
//       <Footer />
//       <WhatsAppButton />
//       <Cart />
//       <Dashboard />
//     </>
//   )
// }

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Hero />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

    </>
  )
}

export default App