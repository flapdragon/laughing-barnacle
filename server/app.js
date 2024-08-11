import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { v4 as uuidv4 } from 'uuid'
import usersRouter from "./users/index.js"

// TODO: Move routes into their own folders/code

// MongoDB
const mongoURL = "mongodb://127.0.0.1:27017/laughing-barnacle"
const mainDB = async () => {
  await mongoose.connect(mongoURL)
  console.log(`Connected to ${mongoURL}`)
}
mainDB().catch(err => console.log(err))

// Instantiate server
const app = express()
app.use(cors())
app.use(express.json()) // Parse request body as JSON
const port = 8000

app.use("/users", usersRouter)

app.listen(port, () => {
  console.log(`Laughing Barnacle app listening on port ${port}`)
})