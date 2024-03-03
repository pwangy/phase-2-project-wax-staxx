import { AlbumsContext } from '../AlbumsProvider'
import { useContext } from 'react'
import { useMemo } from 'react'
import Card from '../components/Card'

const MyStaxx = () => {
    const { albums } = useContext(AlbumsContext)

    const renderAlbums = useMemo(() => albums
        .filter(a => {
            return (a.inCollection === true)
        })
        .map(a => <Card key={a.id} {...a} />
    ), [albums])

    return (
        <article className='article-wrapper'>
        <div className='article-title'>
            <h2>My Staxx</h2>
            <hr />
        </div>
        <div className='article-wrapper container-view'>
            {renderAlbums}
        </div>
    </article>
    )
}

export default MyStaxx

// MyStaxx - displays user's collection, click to remove  (not Delete)individual albums (MVP 2. view My Collection - POST & GET) (MVP 4. Remove from My Collection ONLY (not allowed to remove from Lib) - PATCH) - pw