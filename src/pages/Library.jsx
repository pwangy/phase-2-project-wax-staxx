import { useMemo } from 'react'
import Card from '../components/Card'

const Library = ({ albums }) => {
    const renderAlbums = useMemo(() => albums.map(a => <Card key={a.id} {...a} />
    ), [albums])

    return (
        <article className='article-wrapper'>
            <h2>Library</h2>
            <div className='article-wrapper'>{renderAlbums}</div>
        </article>
)}

export default Library