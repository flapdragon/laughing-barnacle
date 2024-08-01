import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const authenticated = sessionStorage.getItem("authenticated")
  console.log(authenticated, typeof authenticated)
  if (authenticated === null || authenticated === "false") return <Navigate to="/login" />
  return <Outlet />
}

export default PrivateRoute
