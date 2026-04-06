import { useState } from "react"
import API from "../services/api"

function Register(){

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleRegister = async(e)=>{
    e.preventDefault()

    try{

      await API.post("/auth/register",{
        name,
        email,
        password
      })

      alert("Registration successful")

    }catch(err){
      alert("Registration failed")
    }
  }

  return(

    <div style={{
      display:"flex",
      justifyContent:"center",
      padding:"60px"
    }}>

      <form
      onSubmit={handleRegister}
      style={{
        width:"350px",
        padding:"30px",
        background:"white",
        borderRadius:"12px",
        boxShadow:"0 10px 25px rgba(0,0,0,0.1)"
      }}
      >

      <h2 style={{marginBottom:"20px"}}>Register</h2>

      <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      required
      style={{
        width:"100%",
        padding:"10px",
        marginBottom:"15px",
        borderRadius:"6px",
        border:"1px solid #ddd"
      }}
      />

      <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      required
      style={{
        width:"100%",
        padding:"10px",
        marginBottom:"15px",
        borderRadius:"6px",
        border:"1px solid #ddd"
      }}
      />

      <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      required
      style={{
        width:"100%",
        padding:"10px",
        marginBottom:"20px",
        borderRadius:"6px",
        border:"1px solid #ddd"
      }}
      />

      <button
      type="submit"
      style={{
        width:"100%",
        padding:"12px",
        background:"#f97316",
        border:"none",
        color:"white",
        borderRadius:"6px",
        cursor:"pointer"
      }}
      >
      Register
      </button>

      </form>

    </div>

  )
}

export default Register