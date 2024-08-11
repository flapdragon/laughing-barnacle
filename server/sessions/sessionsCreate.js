import mongoose from "mongoose"
import SessionsSchema from "./sessionsSchema.js"

const sessionsCreate = async (req, res) => {
  let { email, token } = req.body
  console.log(email, token)
  // If email and token are defined and not empty strings
  if (email && token) {
    try {
      // Create session model
      const Sessions = mongoose.model("Sessions", SessionsSchema)
      // Find user credentials
      const session = await Sessions.create({
        email, token
      })
      console.log("sessionsCreate session", session)
      res.status(200).json({ "message": "Record created successful.", "success": true })
    }
    catch (err) {
      console.log(err)
      res.status(200).json({ "message": "There was an error.", "success": false })
    }
  }
  // If email and password are not defined or are empty strings
  else {
    res.status(200).json({ "message": "Error: Session data not valid.", "success": false })
  }
}

export default sessionsCreate