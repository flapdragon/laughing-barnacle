import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  // const [ canSubmit, setCanSubmit ] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit")
    // if email or password not filled out
    if (email.length < 3 || password.length < 3) {
      // Alert
      // TODO: handle user error
      console.log("Login form error user message")
    }
    else {
      // TODO: handle login 
      console.log("Submit login")
      // Get session data
      const sessionEmail = sessionStorage.getItem("email")
      const sessionPassword = sessionStorage.getItem("password")
      // Validate login credentials
      if (email === sessionEmail && password === sessionPassword) {
        // Set login status
        sessionStorage.setItem("authenticated", true)
        // Navigate to home
        navigate("/")
      }
      else {
        // TODO: Show login error
        console.log("Login bad")
      }
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">Email address</label>
            <div className="mt-2">
              <input
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 p-2" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 p-2" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-00 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?&nbsp;
          <Link to="/Signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
