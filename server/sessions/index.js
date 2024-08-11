import express from "express"
import checkSession from "./checkSession.js"

const sessionsRouter = express.Router()

sessionsRouter.post("/check-login", checkSession)

export default sessionsRouter