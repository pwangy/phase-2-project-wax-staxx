import { useState } from 'react'
// import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

const App = ( ) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
}

  return (
    <>
      <header>
        {/* <Nav /> */}
          <h1>I&apos;m the nav!</h1>
          {/* We should make it light...it will be dark already! isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} */}
      </header>
      <main>
        <Outlet context ={{searchQuery, handleSearch}}/>
      </main>
      {/* add a footer with credits and links */}
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
  }}