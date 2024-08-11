import mongoose from "mongoose"
import UsersSchema from "./usersSchema.js"

const usersCheckLogin = async (req, res) => {
  let { token } = req.body
  res.status(200).json({ "auth": true })
}

export default usersCheckLogin
