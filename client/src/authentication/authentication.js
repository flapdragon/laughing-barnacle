import CryptoAES from 'crypto-js/aes'
import CryptoENC from 'crypto-js/enc-utf8'

const secretKey = "secret key 123"

// Get login info from local storage
export const getLogin = ({ email, password }) => {
  const storagePassword = localStorage.getItem("password")
  let cipherText = CryptoAES.decrypt(storagePassword.toString(), secretKey)
  // console.log(storagePassword, cipherText, cipherText.toString(CryptoENC), secretKey)
  return { email: localStorage.getItem("email"), password: cipherText.toString(CryptoENC) }
}

// Set login status in local storage, either true or false, logged in or logged out
export const setLoginStatus = (bool) => {
  // Set login status
  localStorage.setItem("authenticated", bool)
  return true
}

// Get login status in local storage
export const getLoginStatus = (bool) => {
  // Set login status
  return localStorage.getItem("authenticated")
}

// Signup
export const signup = ({ firstName, lastName, email, password }) => {
  localStorage.setItem("firstName", firstName)
  localStorage.setItem("lastName", lastName)
  localStorage.setItem("email", email)
  // Encrypt password
  // NOTES: https://stackoverflow.com/questions/49602276/how-to-encrypt-decrypt-with-crypto-js
  // NOTES: https://www.npmjs.com/package/crypto-js#aes-encryption
  let cipherText = CryptoAES.encrypt(password, secretKey)
  localStorage.setItem("password", cipherText)
  return true
}
