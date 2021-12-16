import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Test from './test'

function App() {
  let [showTest, setShowTest] = useState(true)
  return (
    <div className="App">
      {showTest && <Test />}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setShowTest(!showTest)}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
