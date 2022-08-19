import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Login } from './components/Login'
import { Signup } from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Login/>
     <Signup/>
    </div>
  )
}

export default App