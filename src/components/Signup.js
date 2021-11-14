import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [password, setPass] = useState('')
  const [confpass, setConfPass] = useState('')
  const [email, setMail] = useState('')
  const history = useHistory()
 
  async function handleSubmit(e) {
    e.preventDefault()
      if (password !== confpass) {
      return setError("les mots de passe ne correspondent pas")
    }
    try {
      setError("")
      setLoading(true)
      await signup(email, password)
      history.push("/")
    } catch {
      setError("échec dans la création de compte")
    }
    setLoading(false)
    console.log(password, email, confpass)
  }
  



  return (
    <div className="main">
      <h1>Connexion</h1>
      {error}
      <form onSubmit={handleSubmit} className="form-signup">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={(e)=>setMail(e.target.value)} value={email}  required/> 
        <label htmlFor="password">Mot de passe</label>
        <input id="password" type="password" onChange={(e)=>setPass(e.target.value)} value={password}  required/>
        <label htmlFor="confirm-password">Confirmez votre mot de passe</label>
        <input id="confirm-password" type="password" onChange={(e)=>setConfPass(e.target.value)} value={confpass}  required/>
        <button onClick={()=>handleSubmit} className="btn-2" disabled={loading}>Créer</button>
        <p>Vous avez déjà un compte ? <Link className="link" to="/login" style={{color:'wheat', fontSize:20}}>Connectez vous ici !</Link></p>
      </form>  
    </div>
  )
}
