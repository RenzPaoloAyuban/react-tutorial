import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Famous Filipino People Gallery</h1>
        <p>Celebrating remarkable Filipinos who have made their mark</p>
      </header>
      <div className="gallery">
        <Profile />
      </div>
    </div>
  )
}

export default App
