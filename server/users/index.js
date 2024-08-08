import express from "express"
import usersLogin from "./usersLogin.js"
import usersCreate from "./usersCreate.js"

const usersRouter = express.Router()

usersRouter.post("/login", usersLogin)
usersRouter.post("/create", usersCreate)

export default usersRouter