import { useState } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import './App.css'

const App = ( ) => {
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
}



  return (
    <>
      <h1>Herro! Welcome to Wax Staxx</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Nav />
        {/* We should make it light...it will be dark already! isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} */}
        <Outlet context ={{searchQuery, handleSearch}}/>
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