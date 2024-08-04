import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getLoginStatus } from './authentication/authentication'

const PrivateRoute = () => {
  // Get login status
  const authenticated = getLoginStatus()
  if (authenticated === null || authenticated === "false") return <Navigate to="/login" />
  return <Outlet />
}

export default PrivateRoute
