import { useContext, useState, useEffect } from 'react'
import { useOutletContext, useLocation } from 'react-router-dom'
import { AlbumsContext } from '../AlbumsProvider'
import Library from './Library'
import SearchBar from '../components/SearchBar'
import SortButtons from '../components/SortButtons'

const LibraryContainer = () => {
    const { albums } = useContext(AlbumsContext)
    const{handleSearch, searchQuery, handleSortSelection, sortSelected} = useOutletContext()
    const [showStaxx, setShowStaxx] = useState(false)
    let location = useLocation()
    
    useEffect(() => {
        if (location.pathname === '/my-staxx') {
            setShowStaxx(true)
        } else {
            setShowStaxx(false)
        }
    }, [location])

    return (
        <>
            <div id='search-sort'>
                <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
                <SortButtons handleSortSelection={handleSortSelection} />
            </div>
            <Library albums={albums} searchQuery={searchQuery} showStaxx={showStaxx} sortSelected={sortSelected} />
        </>
)}

export default LibraryContainer
