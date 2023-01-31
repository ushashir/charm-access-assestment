import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Signup from './components/Signup'

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    )
}

export default App
