import { useEffect, useState } from "react"
import API from "../services/api"

function Orders(){

  const [orders,setOrders] = useState([])

  useEffect(()=>{

    const fetchOrders = async ()=>{

      try{

        const token = localStorage.getItem("token")

        const res = await API.get("/orders/myorders",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })

        setOrders(res.data)

      }catch(err){
        console.log(err)
      }
    }

    fetchOrders()

  },[])

  return(

    <div style={{padding:"60px"}}>

      <h2 style={{marginBottom:"30px"}}>My Orders</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map(order=>(
        <div
        key={order._id}
        style={{
          background:"white",
          padding:"20px",
          marginBottom:"20px",
          borderRadius:"10px",
          boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
        }}
        >

          <h4>Order ID: {order._id}</h4>

          <p>Status: {order.status}</p>

          <p>Total: ₹{order.totalPrice}</p>

          <div>

            {order.items.map(item=>(
              <p key={item._id}>
                Item ID: {item.menuItem} | Qty: {item.quantity}
              </p>
            ))}

          </div>

        </div>
      ))}

    </div>
  )
}

export default Orders