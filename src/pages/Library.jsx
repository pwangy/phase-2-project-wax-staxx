import { useMemo } from 'react'
import Card from '../components/Card'

const Library = ({ showStaxx, albums, searchQuery, sortSelected }) => {
    const filterAndSortedAlbums = useMemo(() => (albums, searchQuery, sortSelected, filterPageCondition) => {
        return albums
            .filter((album) => {
                if (!album.artist || !album.title) return false
                return (
                    album.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    album.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
            })
            .filter(filterPageCondition)
            .sort((a, b) => {
                if (sortSelected !== 'All') {
                    return a[sortSelected].toLowerCase().localeCompare(b[sortSelected].toLowerCase())
                } else {
                    return true
                }
            })
            .map((a) => (
                <Card
                    key={a.id}
                    {...a}
                    showStaxx={showStaxx}
                    isAlbumInCollection={() => a.inCollection}
                />
            ))
    }, [showStaxx])

    const renderLibrary = filterAndSortedAlbums(albums, searchQuery, sortSelected, () => true)
    const renderStaxx = filterAndSortedAlbums(
        albums,
        searchQuery,
        sortSelected,
        (album) => album.inCollection === true
    )
    return (
        <article className='article-wrapper'>
        <div className='article-title'>
            <h2>{showStaxx ? 'My Staxx' : 'Catalog'}</h2>
            <hr />
        </div>
        <div className='article-wrapper container-view'>
            {showStaxx ? renderStaxx : renderLibrary}
        </div>
        </article>
    )
    }

export default Library
