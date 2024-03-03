import { useMemo } from 'react'
import Card from '../components/Card'

const Library = ({ albums, searchQuery, sortSelected }) => {
    const renderAlbums = useMemo(() => albums
    .filter(album => {
        if (!album.artist || !album.title) return false;
        return (
        album.artist.toLowerCase().includes(searchQuery.toLowerCase())||
        album.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

    })
    .map(a => ( <Card key={a.id} {...a} />
    )), [albums, searchQuery, sortSelected])

    console.log(albums)
    return (
        <article className='article-wrapper'>
            <div className='article-title'>
                <h2>Catalog</h2>
                <hr />
            </div>
            <div className='article-wrapper container-view'>
                {renderAlbums}
            </div>
        </article>
)}

export default Library

// Library - displays collection of Cards, 
// ! click to add to Collection 
// (MVP 1. Display all albums (Lib) - GET)
// (MVP 1.5 AAdd to collection )