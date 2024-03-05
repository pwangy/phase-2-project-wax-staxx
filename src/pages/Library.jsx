import { useMemo } from 'react'
import Card from '../components/Card'

// ! this is our LIST
const Library = ({ showStaxx, albums, searchQuery, sortSelected, handleStaxx }) => {

    const renderLibrary = useMemo(() => albums
        .filter(album => {
            if (!album.artist || !album.title) return false
                return (
                album.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                album.title.toLowerCase().includes(searchQuery.toLowerCase()
                ))
        })
        .sort ((a, b) => {
            if (sortSelected!== 'All') {
                return a[sortSelected].toLowerCase().localeCompare(b[sortSelected].toLowerCase())
            } else {
                return true
            }
        })
        .map(a => <Card key={a.id} {...a} handleStaxx={handleStaxx} action={add} />
        ), [albums, searchQuery, sortSelected]
    )

    const renderStaxx = useMemo(() => albums
        .filter(a => {
            return (a.inCollection === true)
        })
        .filter(album => {
            if (!album.artist || !album.title) return false
                return (
                album.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                album.title.toLowerCase().includes(searchQuery.toLowerCase()
                ))
        })
        .sort ((a, b) => {
            if (sortSelected!== 'All') {
                return a[sortSelected].toLowerCase().localeCompare(b[sortSelected].toLowerCase())
            } else {
                return true
            }
        })
        .map(a => <Card key={a.id} {...a} handleStaxx={handleStaxx} action={remove} />
        ), [albums, searchQuery, sortSelected]
    )

    return (
        <article className='article-wrapper'>
            <div className='article-title'>
                <h2>{ showStaxx ? 'My Staxx' : 'Catalog' }</h2>
                <hr />
            </div>
            <div className='article-wrapper container-view'>
            { showStaxx ? renderStaxx : renderLibrary }
            </div>
        </article>
)}

export default Library

// (MVP 1.5 AAdd to collection )
// MyStaxx - displays user's collection, click to remove  (not Delete)individual albums (MVP 2. view My Collection - POST & GET) (MVP 4. Remove from My Collection ONLY (not allowed to remove from Lib) - PATCH) - pw