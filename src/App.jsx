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
          <h1>I&apos;m the nav!</h1>
          {/* We should make it light...it will be dark already! isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} */}
      </header>
      <main>
        <h3>I&apos;m where the App Outlet is.</h3>
        <Outlet context={{searchQuery, handleSearch, handleSortSelection, sortSelected }}/>
      </main>
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