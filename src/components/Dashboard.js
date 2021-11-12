import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Echec déconnexion")
    }
  }

  return (
    <div className="main">
      {error}
      <h1>hello dashboard</h1>
      <h2>{currentUser.email}</h2>
      <button onClick={()=>handleLogout()} className="btn-out">Deconnexion</button>
    </div>
  )
}
