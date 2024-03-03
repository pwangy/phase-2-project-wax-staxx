import { useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
import { AlbumsContext } from '../AlbumsProvider'
import Library from './Library'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import SortButtons from '../components/SortButtons'

const LibraryContainer = () => {
    const { albums } = useContext(AlbumsContext)
    const{handleSearch, searchQuery, handleSortSelection} = useOutletContext()

    return (
        <>
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
            {/* <SortButtons handleSortSelection={handleSortSelection} /> */}
            <Library albums={albums} searchQuery={searchQuery} />
        </>
)}

export default LibraryContainer