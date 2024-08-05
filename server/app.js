import express from 'express'
import cors from 'cors'

// Instantiate server
const app = express()
app.use(cors())
app.use(express.json()) // Parse request body as JSON
const port = 8000

app.get("/login", (req, res) => {
  const secretKey = "secret key 123"
  res.status(200).json({ "token": secretKey })
})

app.listen(port, () => {
  console.log(`Laughing Barnacle app listening on port ${port}`)
})