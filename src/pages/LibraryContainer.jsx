import { useContext, useState, useEffect } from 'react'
import { useOutletContext, useLocation } from 'react-router-dom'
import { AlbumsContext } from '../AlbumsProvider'
import Library from './Library'
import SearchBar from '../components/SearchBar'
// import SortButtons from '../components/SortButtons'

const LibraryContainer = () => {
    const { albums } = useContext(AlbumsContext)
    const{handleSearch, searchQuery, handleSortSelection} = useOutletContext()
    const [showStaxx, setShowStaxx] = useState(false)
    let location = useLocation()
    
    useEffect(() => {
        if (location.pathname === '/my-staxx') {
            console.log('show staxx')
            setShowStaxx(true)
        } else {
            console.log('show')
            setShowStaxx(false)
        }
    }, [location])

    return (
        <>
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
            {/* <SortButtons handleSortSelection={handleSortSelection} /> */}
            <Library albums={albums} searchQuery={searchQuery} showStaxx={showStaxx} />
        </>
)}

export default LibraryContainer
