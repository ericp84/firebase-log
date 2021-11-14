import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setMail] = useState('')



  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(email)
      setMessage("Un email vous à été envoyé, suivez les instructions pour réinitialiser votre mot de passe")
    } catch {
      setError("Echec de réinitialisation du mot de passe")
    }

    setLoading(false)
  }

  return (
    <div className="main">
      <h1>Réinitialisation du mot de passe</h1>
      {error}
      {message}
      <form onSubmit={handleSubmit} className="form-signup">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={(e)=>setMail(e.target.value)} value={email} required/> 
        <button onClick={handleSubmit} className="btn-2" disabled={loading}>Réinitialisation</button>
        <Link className="link" to="/login" style={{color:'wheat', fontSize:20, marginTop:"10px"}}>Connectez vous ici !</Link>
      </form>  
    </div>
  )
}
