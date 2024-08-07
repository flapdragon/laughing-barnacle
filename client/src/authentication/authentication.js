import axios from "axios"

// const secretKey = "secret key 123"
const server = "http://localhost:8000"

// Get login info from local storage
export const checkLogin = async (email, password) => {
  console.log(email, password)
  const response = await axios.post(`${server}/login`, { email, password })
  const loggedIn = response.data.loggedIn
  console.log(response.data)
  if (loggedIn) {
    // Set user storage
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
export const getLoginStatus = (bool) => {
  // Set login status
  return localStorage.getItem("loggedIn")
}

// Signup
export const signup = async ({ firstName, lastName, email, password }) => {
  const response = await axios.post(`${server}/signup`, { firstName, lastName, email, password })
  // const secretKey = response.data.token
  // localStorage.setItem("firstName", firstName)
  // localStorage.setItem("lastName", lastName)
  // localStorage.setItem("email", email)
  // Encrypt password
  // NOTES: https://stackoverflow.com/questions/49602276/how-to-encrypt-decrypt-with-crypto-js
  // NOTES: https://www.npmjs.com/package/crypto-js#aes-encryption
  // let cipherText = CryptoAES.encrypt(password, secretKey)
  // localStorage.setItem("password", cipherText)
  return true
}
