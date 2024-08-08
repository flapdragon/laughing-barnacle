import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ isAuth }) => {
  console.log("PrivateRoute isAuth", isAuth)
  // Get login status
  if (isAuth === null || isAuth === false) {
    return <Navigate to="/login" />
  }
  else if (isAuth === undefined) {
    return <div>Loading ...</div>
  }
  return <Outlet />
}

export default PrivateRoute
