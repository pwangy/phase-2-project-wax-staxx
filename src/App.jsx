import { useState } from 'react'
import { Outlet , Link} from 'react-router-dom'
import { useErrorAlerts } from '../src/context/ErrorAlertsProvider'
import Logo from './assets/waxstaxx.svg'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortSelected, setSortSelected] = useState('All')
  const { success, error } = useErrorAlerts()

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
      <Link to='/'><img src={Logo} alt='Wax Staxx logo' id='logo' /></Link>
        <NavBar />
      </header>
      <main>
        {error && <div className='alerts'>{error}</div>}
        {success && <div className='alerts-green'>{success}</div>}
        <Outlet context={{ searchQuery, handleSearch, handleSortSelection, sortSelected, useErrorAlerts }}/>
        <hr id='footer' />
        <Footer />
      </main>
    </>
  )
}

export default App
