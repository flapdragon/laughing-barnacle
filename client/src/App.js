import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard"
import { getLoginStatus } from "./authentication/authentication"
import "./App.css"

function App() {
  const [ isAuth, setIsAuth ] = useState(undefined)

  useEffect(() => {
    const checkLogin = async () => {
      const authenticated = await getLoginStatus()
      setIsAuth(authenticated)
    }
    checkLogin()
  }, [])

  useEffect(() => {
    console.log(isAuth)
  }, [isAuth])

  return (
    <div className="h-screen w-screen bg-slate-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
