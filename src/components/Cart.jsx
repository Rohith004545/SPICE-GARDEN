import { useCart } from "../context/CartContext"
import API from "../services/api"

function Cart() {

  const { cart, removeFromCart, totalPrice } = useCart()

  const placeOrder = async () => {

    try {

      const token = localStorage.getItem("token")

      const orderItems = cart.map(item => ({
        menuItem: item._id,
        quantity: item.quantity
      }))

      const res = await API.post(
        "/orders",
        {
          items: orderItems,
          totalPrice: totalPrice
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert("Order placed successfully!")

      window.location.reload()

    } catch (error) {
      console.error(error)
      alert("Order failed")
    }

  }

  return (

    <div style={{ padding: "40px" }}>

      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (

        <div
          key={item._id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "10px"
          }}
        >

          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => removeFromCart(item._id)}>
            Remove
          </button>

        </div>

      ))}

      {cart.length > 0 && (

        <div style={{ marginTop: "20px" }}>

          <h3>Total: ₹{totalPrice}</h3>

          <button
            onClick={placeOrder}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px"
            }}
          >
            Checkout
          </button>

        </div>

      )}

    </div>

  )
}

export default Cart