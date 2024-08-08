import request from "request"

const action = "createOne"
const server = "http://127.0.0.1:8000"

const testUser = { username: "test", email: "test@test.com", password: "test", firstName: "test", lastName: "test" }

switch (action) {
  case "createOne":
    request.post(
      `${server}/users/create`,
      { json: testUser },
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          console.log(response, body)
        }
        else {
          console.log(error)
        }
      }
    )
    break
}