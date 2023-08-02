import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import Courses from './pages/Courses'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './index.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/onboarding" element={<Onboarding/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
