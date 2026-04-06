import { useEffect, useState } from "react"
import API from "../services/api"

function Dashboard() {

  const [orders, setOrders] = useState([])
  const [reservations, setReservations] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      try {

        const token = localStorage.getItem("token")

        const orderRes = await API.get("/orders", {
          headers: { Authorization: `Bearer ${token}` }
        })

        const reservationRes = await API.get("/reservations", {
          headers: { Authorization: `Bearer ${token}` }
        })

        setOrders(orderRes.data)
        setReservations(reservationRes.data)

      } catch (error) {
        console.error(error)
      }

    }

    fetchData()

  }, [])

  return (

    <div style={{ padding: "40px" }}>

      <h2>User Dashboard</h2>

      {/* Orders Section */}
      <h3>My Orders</h3>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map(order => (

        <div
          key={order._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px"
          }}
        >

          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> ₹{order.totalPrice}</p>

          <p><strong>Items:</strong></p>

          <ul>
            {order.items.map(item => (
              <li key={item._id}>
                {item.menuItem?.name} x {item.quantity}
              </li>
            ))}
          </ul>

        </div>

      ))}

      {/* Reservations Section */}
      <h3 style={{ marginTop: "40px" }}>My Reservations</h3>

      {reservations.length === 0 && <p>No reservations</p>}

      {reservations.map(res => (

        <div
          key={res._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px"
          }}
        >

          <p><strong>Date:</strong> {res.date}</p>
          <p><strong>Time:</strong> {res.time}</p>
          <p><strong>Guests:</strong> {res.guests}</p>

        </div>

      ))}

    </div>

  )

}

export default Dashboard