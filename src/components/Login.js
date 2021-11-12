import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [password, setPass] = useState('')
  const [email, setMail] = useState('')
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(email, password)
      history.push("/")
    } catch {
      setError("Erreur de connexion")
    }

    setLoading(false)
  }

  return (
    <div className="main">
      <h1>Connexion</h1>
      {error}
      <form onSubmit={handleSubmit} className="form-signin">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={(e)=>setMail(e.target.value)} value={email} required/> 
        <label htmlFor="password">Mot de passe</label>
        <input id="password" type="password" onChange={(e)=>setPass(e.target.value)} value={password} required/>
        <button onClick={()=>handleSubmit} className="btn" disabled={loading}>Connexion</button>
        <Link className="mdp-for" to="/forgot-password" style={{color:'wheat', fontSize:20}}>Mot de passe oublié ?</Link>
        <p>Pas encore de compte ? <Link className="link" to="/signup" style={{color:'wheat', fontSize:20}}>Créez le ici !</Link></p>
      </form>  
    </div>
  )
}
