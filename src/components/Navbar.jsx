// import { useState } from "react"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-red-500">
//           Spice Garden
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-lg">
//           <li><a href="#home" className="hover:text-red-500">Home</a></li>
//           <li><a href="#about" className="hover:text-red-500">About</a></li>
//           <li><a href="#menu" className="hover:text-red-500">Menu</a></li>
//           <li><a href="#gallery" className="hover:text-red-500">Gallery</a></li>
//           <li><a href="#testimonials" className="hover:text-red-500">Reviews</a></li>
//           <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <div> <a href="#home">Home</a> </div>
// .       <div> <a href="#about">About</a> </div>
// .       <div> <a href="#menu">Menu</a> </div>
//         <div><a href="#gallery">Gallery</a></div>
//         <div><a href="#testimonials">Reviews</a></div>
// .       <div> <a href="#contact">Contact</a> </div>.       
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-black text-center py-4 space-y-4 text-lg">
//           <div>About</div>
//           <div>Menu</div>
//           <div>Gallery</div>
//           <div>Contact</div>
//         </div>
//       )}
//     </nav>
//   )
// }



// import { useCart } from "../context/CartContext"

// function Navbar() {

//   const { cart } = useCart()

//   const totalItems = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   )

//   return (

//     <nav style={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "18px 60px",
//       background: "#0f172a",
//       color: "white",
//       boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
//     }}>

//       {/* Logo */}
//       <h2 style={{
//         color: "#f97316",
//         fontWeight: "bold"
//       }}>
//         🍽 Spice Garden
//       </h2>

//       {/* Navigation Links */}
//       <div style={{
//         display: "flex",
//         alignItems: "center",
//         gap: "30px"
//       }}>

//         <a
//           href="#menu"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             fontWeight: "500"
//           }}
//         >
//           Menu
//         </a>

//         <a
//           href="#orders"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             fontWeight: "500"
//           }}
//         >
//           Orders
//         </a>

//         <a
//           href="#login"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             fontWeight: "500"
//           }}
//         >
//           Login
//         </a>

//         <a
//           href="#register"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             fontWeight: "500"
//           }}
//         >
//           Register
//         </a>

//         {/* Cart Icon */}
//         <div style={{
//           position: "relative",
//           fontSize: "22px",
//           cursor: "pointer"
//         }}>

//           🛒

//           {totalItems > 0 && (
//             <span style={{
//               position: "absolute",
//               top: "-8px",
//               right: "-12px",
//               background: "#f97316",
//               color: "white",
//               borderRadius: "50%",
//               padding: "3px 7px",
//               fontSize: "12px",
//               fontWeight: "bold"
//             }}>
//               {totalItems}
//             </span>
//           )}

//         </div>

//       </div>

//     </nav>

//   )
// }

// export default Navbar

import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar() {

  const { cart } = useCart()

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (

    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"18px 60px",
      background:"#0f172a",
      color:"white"
    }}>

      <h2 style={{color:"#f97316"}}>
        🍽 Spice Garden
      </h2>

      <div style={{
        display:"flex",
        gap:"30px",
        alignItems:"center"
      }}>

        <Link to="/menu" style={{color:"white",textDecoration:"none"}}>
          Menu
        </Link>

        <Link to="/orders" style={{color:"white",textDecoration:"none"}}>
          Orders
        </Link>

        <Link to="/login" style={{color:"white",textDecoration:"none"}}>
          Login
        </Link>

        <Link to="/register" style={{color:"white",textDecoration:"none"}}>
          Register
        </Link>

        <Link to="/cart" style={{position:"relative",fontSize:"20px",color:"white"}}>
          🛒
          {totalItems > 0 && (
            <span style={{
              position:"absolute",
              top:"-8px",
              right:"-12px",
              background:"#f97316",
              borderRadius:"50%",
              padding:"3px 7px",
              fontSize:"12px"
            }}>
              {totalItems}
            </span>
          )}

        </Link>

      </div>

    </nav>

  )
}

export default Navbar