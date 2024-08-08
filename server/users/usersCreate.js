import mongoose from "mongoose"
import UsersSchema from "./usersSchema.js"

const usersCreate = async (req, res) => {
  let { username, email, password, firstName, lastName } = req.body
  console.log(username, email, password, firstName, lastName)
  // If email and password are defined and not empty strings
  if (username && email && password && firstName && lastName) {
    try {
      // Create user model
      const Users = mongoose.model("Users", UsersSchema)
      // Find user credentials
      const user = await Users.create({
        username, email, password, firstName, lastName
      })
      console.log("usersCreate user", user)
      // TODO: Add check for database response
      res.status(200).json({ "message": "Record created successful.", "success": true })
    }
    catch (err) {
      console.log(err)
      res.status(200).json({ "message": "There was an error.", "success": false })
    }
  }
  // If email and password are not defined or are empty strings
  else {
    res.status(200).json({ "message": "Error: Form data not valid.", "success": false })
  }
}

export default usersCreate