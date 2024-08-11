import axios from "axios"

// const secretKey = "secret key 123"
const server = "http://localhost:8000"

// Get login info from local storage
export const checkLogin = async (email, password) => {
  console.log(email, password)
  const response = await axios.post(`${server}/users/login`, { email, password })
  const loggedIn = response.data.auth
  console.log(response.data)
  if (loggedIn) {
    // Set frontend user storage
    setLoginStatus(response.data.token)
    // return true to login form
    return true
  }
}

// Set login info in local storage
export const setLoginStatus = (token) => {
  // Set login status
  localStorage.setItem("token", token)
  return true
}

// Get login status in local storage
export const getLoginStatus = async () => {
  // Get login status from backend
  const response = await axios.get(`${server}/check-login`, {})
  console.log(response.data)
  // Get login status
  // return localStorage.getItem("loggedIn")
  return response.data.auth
}

// Signup
export const signup = async ({ username, firstName, lastName, email, password }) => {
  const response = await axios.post(`${server}/users/create`, { username, firstName, lastName, email, password })
  return response.data.success
}
