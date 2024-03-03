import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'


const App = ( ) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortSelected, setSortSelected] = useState("All");


  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSortSelection = (e) => {
    const selectedOption = e.target.textContent;
    setSortSelected(selectedOption);
  };






  return (
    <>
      <header>
        <Header />
        <NavBar />
          {/* We should make it light...it will be dark already! isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} */}
      </header>
      <main>
        <Outlet context={{searchQuery, handleSearch, handleSortSelection, sortSelected }}/>
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