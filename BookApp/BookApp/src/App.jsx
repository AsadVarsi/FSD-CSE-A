import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Book></Book>
      </div>

    </>
  )
}

export default App
