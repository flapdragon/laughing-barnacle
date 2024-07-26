import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

import './App.css'

function App() {
  return (
    <div className="bg-slate-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
