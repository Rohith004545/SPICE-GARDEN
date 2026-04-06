// const menuItems = [
//   {
//     name: "Paneer Butter Masala",
//     price: "₹250",
//     image:
//       "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
//     desc: "Rich creamy tomato gravy with soft paneer cubes.",
//   },
//   {
//     name: "Chicken Biryani",
//     price: "₹320",
//     image:
//       "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
//     desc: "Aromatic basmati rice cooked with tender chicken.",
//   },
//   {
//     name: "Masala Dosa",
//     price: "₹120",
//     image:
//       "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4",
//     desc: "Crispy dosa filled with spiced potato mixture.",
//   },
// ]

// export default function Menu() {
//   return (
//     <section id="menu" className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Our Special Menu</h2>
//           <p className="text-gray-600 text-lg">
//             Handpicked dishes loved by our customers
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {menuItems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-60 w-full object-cover"
//               />

//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-2">
//                   {item.name}
//                 </h3>

//                 <p className="text-gray-600 mb-4">
//                   {item.desc}
//                 </p>

//                 <div className="flex justify-between items-center">
//                   <span className="text-red-600 font-bold text-xl">
//                     {item.price}
//                   </span>

//                   <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
//                     Order
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

import { useEffect, useState } from "react"
import API from "../services/api"
import { useCart } from "../context/CartContext"

function Menu() {

  const [menu, setMenu] = useState([])
  const { addToCart } = useCart()

  useEffect(() => {

    const fetchMenu = async () => {
      try {
        const res = await API.get("/menu")
        setMenu(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMenu()

  }, [])

  return (

    <div style={{ padding: "60px" }}>

      <h2 style={{ marginBottom: "30px" }}>Our Menu</h2>

      {menu.map(item => (

        <div
          key={item._id}
          style={{
            background: "white",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >

          <h3>{item.name}</h3>

          <p>{item.description}</p>

          <p>₹{item.price}</p>

          <button
            onClick={() => addToCart(item)}
            style={{
              marginTop: "10px",
              padding: "10px 16px",
              background: "#f97316",
              border: "none",
              color: "white",
              borderRadius: "6px"
            }}
          >
            Add to Cart
          </button>

        </div>

      ))}

    </div>
  )
}

export default Menu