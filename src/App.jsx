import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Resume></Resume>
    </>
  )
}

export default App
