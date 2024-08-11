import mongoose from "mongoose"
import CryptoJS from "crypto-js"
import UsersSchema from "./usersSchema.js"

const secretKey = "90p83q4tuEahnrvD9p78!qh5G"

const usersLogin = async (req, res) => {
  let { email, password } = req.body
  console.log(email, password)
  // If email and password are defined and not empty strings
  if (email && password) {
    // Create user model
    const Users = mongoose.model("Users", UsersSchema)
    // Find user credentials
    const user = await Users.findOne({ email, password })
    // Create token from email
    console.log("usersLogin user", user)
    // If user exists and credentials are correct
    if (user) {
      let ciphertext = CryptoJS.AES.encrypt(email, secretKey).toString()
      console.log("email:", email, "ciphertext:", ciphertext)
      res.status(200).json({ "message": "Login successful.", "auth": true, "token": ciphertext })
    }
    else {
      res.status(200).json({ "message": "Error: Login unsuccessful.", "auth": false })
    }
  }
  // If email and password are not defined or are empty strings
  else {
    res.status(200).json({ "message": "Error: Login not valid.", "auth": false })
  }
}

export default usersLogin