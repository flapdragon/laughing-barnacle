import express from 'express'
import cors from 'cors'

// Instantiate server
const app = express()
app.use(cors())
const port = 8000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Laughing Barnacle app listening on port ${port}`)
})