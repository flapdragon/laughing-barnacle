import axios from "axios"

// const secretKey = "secret key 123"
const server = "http://localhost:8000"

// Get login info from local storage
export const checkLogin = async (email, password) => {
  console.log(email, password)
  const response = await axios.post(`${server}/users/login`, { email, password })
  const loggedIn = response.data.loggedIn
  console.log(response.data)
  if (loggedIn) {
    // Set frontend user storage
    setLoginStatus(true)
    // return true to login form
    return true
  }
}

// Set login status in local storage, either true or false, logged in or logged out
export const setLoginStatus = (bool) => {
  // Set login status
  localStorage.setItem("loggedIn", bool)
  return true
}

// Get login status in local storage
export const getLoginStatus = async () => {
  // Get login status from backend
  const response = await axios.get(`${server}/check-login`, {})
  console.log(response.data)
  // Get login status
  // return localStorage.getItem("loggedIn")
  return response.data.loggedIn
}

// Signup
export const signup = async ({ firstName, lastName, email, password }) => {
  const response = await axios.post(`${server}/signup`, { firstName, lastName, email, password })
  return true
}
