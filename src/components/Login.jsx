import { useState } from "react"
import API from "../services/api"

function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async (e)=>{
    e.preventDefault()

    try{

      const res = await API.post("/auth/login",{
        email,
        password
      })

      localStorage.setItem("token",res.data.token)

      alert("Login Successful")

    }catch(err){
      alert("Login failed")
    }
  }

  return(

    <div style={{
      display:"flex",
      justifyContent:"center",
      padding:"60px"
    }}>

      <form
      onSubmit={handleLogin}
      style={{
        width:"350px",
        padding:"30px",
        background:"white",
        borderRadius:"12px",
        boxShadow:"0 10px 25px rgba(0,0,0,0.1)"
      }}
      >

      <h2 style={{marginBottom:"20px"}}>Login</h2>

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
      Login
      </button>

      </form>

    </div>

  )
}

export default Login