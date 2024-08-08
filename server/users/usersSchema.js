import mongoose from "mongoose"

const Schema = mongoose.Schema

const UsersSchema = new Schema({
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String
})

export default UsersSchema