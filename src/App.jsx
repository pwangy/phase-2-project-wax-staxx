import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Herro! Welcome to Wax Staxx</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App

export const libraryLoader = async() => {
  try {
    const res = await fetch(`http://localhost:4000/records`)
    return await res.json()
  } catch (error) {
    return error
  }
}