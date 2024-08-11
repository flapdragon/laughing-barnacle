import mongoose from "mongoose"
import SessionsSchema from "./sessionSchema.js"

const checkSession = async (req, res) => {
  let { email, token } = req.params // email and token are encrypted
  console.log(email, token)
  // If email and token are defined and not empty strings
  if (email && token) {
    // Create user model
    const Sessions = mongoose.model("Sessions", SessionsSchema)
    // Find user session
    const session = await Sessions.findOne({ email, token })
    console.log("checkLogin session", session)
    // If session exists and email and token are correct
    if (session) {
      res.status(200).json({ "message": "User is logged in.", "auth": true })
    }
    else {
      res.status(200).json({ "message": "Error: Session not valid.", "auth": false })
    }
  }
  // If email and token are not defined or are empty strings
  else {
    res.status(200).json({ "message": "Error: Session not valid.", "auth": false })
  }
}

export default checkSession