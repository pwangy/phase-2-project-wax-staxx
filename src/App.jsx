import { useState } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import { useErrorAlerts } from './pages/ErrorAlertsProvider'

const App = ( ) => {
  const [searchQuery, setSearchQuery] = useState('')
  const { error } = useErrorAlerts()

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
}

  return (
    <>
      <header>
        <Nav />
          <h1>I&apos;m the nav!</h1>
          {/* We should make it light...it will be dark already! isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} */}
          {error && <div style={{ color: 'red' }}>{error}</div>}
      </header>
      <main>
        <h3>I&apos;m where the App Outlet is.</h3>
        <Outlet context ={{searchQuery, handleSearch}}/>
      </main>
    </>
  )
}

export default App

// export const libraryLoader = async() => {
//   try {
//     const res = await fetch(`http://localhost:4000/records`)
//     return await res.json()
//   } catch (error) {
//     return error
//   }
// }