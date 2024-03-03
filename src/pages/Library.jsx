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
            <h2>Library</h2>
            <div className='article-wrapper'>{renderAlbums}</div>
        </article>
)}

export default Library