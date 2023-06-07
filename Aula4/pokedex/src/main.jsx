import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Header from './pages/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route Component={Header} path='/'>
          <Route Component={Home} path='/'/>
          <Route Component={About} path='/about'/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
