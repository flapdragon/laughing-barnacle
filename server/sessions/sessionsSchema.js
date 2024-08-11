import mongoose from "mongoose"

const Schema = mongoose.Schema

const SessionsSchema = new Schema({
  email: String,
  token: String,
  dateCreated: Date
})

export default SessionsSchema