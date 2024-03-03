import { useMemo } from 'react'
import Card from '../components/Card'

const Library = ({ albums }) => {
    const renderAlbums = useMemo(() => albums.map(a => <Card key={a.id} {...a} />
    ), [albums])

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