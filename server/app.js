import express from "express"
import cors from "cors"
import session from "express-session"
import { v4 as uuidv4 } from 'uuid'

// TODO: Add MongoDB

// Instantiate server
const app = express()
app.use(cors())
app.use(express.json()) // Parse request body as JSON
// Add express session
app.use(session({
	secret: "Nk2JMXqH2nevAnspiWrH",
	resave: true,
	saveUninitialized: true
}))
const port = 8000

let userEmail = "test@test.com"
let userPassword = "pass"
let userFirstName = "test"
let userLastName = "test"

app.post("/login", (req, res) => {
  // Get user login form data
  let { email, password } = req.body
  // If email and password exist and have values
  if (email && password) {
    // If email and password are correct
    if (email === userEmail && password === userPassword) {
      // Set express session
      req.session.loggedIn = true
			req.session.email = email
      // return token
      req.session.token = uuidv4()
      console.log(req.session)
      res.status(200).json({ "message": "Login successful", "loggedIn": true })
    }
    // If email or password credentials are incorrect
    else {
      // return credential error
      res.status(200).json({ "message": "Login not successful", "loggedIn": false  })
    }
  }
  // Email and password not entered
  else {
    // Return error
    res.status(200).json({ "message": "Login not valid", "loggedIn": false  })
  }
})

app.post("/signup", (req, res) => {
  let { firstName, lastName, email, password } = req.body
  console.log({ firstName, lastName, email, password })
  // TODO: Validate fields
  // TODO: Put these credentials in database
  if (firstName && lastName && email && password) {
    console.log("signup valid")
    userEmail = email
    userPassword = password
    userFirstName = firstName
    userLastName = lastName
    res.status(200).json({ "message": "Signup successful", "signedUp": true})
  }
})

app.listen(port, () => {
  console.log(`Laughing Barnacle app listening on port ${port}`)
})