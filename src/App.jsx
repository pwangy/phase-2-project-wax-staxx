import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useErrorAlerts } from '../src/context/ErrorAlertsProvider'
import NavBar from './components/NavBar'
import Logo from './assets/waxstaxx.svg'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortSelected, setSortSelected] = useState('All')
  const { error } = useErrorAlerts()

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSortSelection = (e) => {
    const selectedOption = e.target.name
    setSortSelected(selectedOption)
  }

  return (
    <>
      <header>
        <img src={Logo} alt='Wax Staxx logo' id='logo' />
        <NavBar />
          {/* We should make it light...it will be dark already! isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} */}
          {error && <div style={{ color: 'red' }}>{error}</div>}
      </header>
      <main>
        <Outlet context={{ searchQuery, handleSearch, handleSortSelection, sortSelected, useErrorAlerts }}/>
      </main>
      {/* add a footer with credits and links */}
    </>
  )
}

export default App
