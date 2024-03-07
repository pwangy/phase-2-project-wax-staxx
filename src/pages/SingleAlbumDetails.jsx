import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumsContext } from '../context/AlbumsProvider'

const SingleAlbumDetails = () => {
  const { id } = useParams()
  const { albums, handlePatchInCollection } = useContext(AlbumsContext)
  const [album, setAlbum] = useState(null)

  useEffect(() => {
    const selectedAlbum = albums.find(album => album.id === id)
    setAlbum(selectedAlbum)
  }, [id, albums])

  if (!album) {
    return <div>Loading...</div>
  }

  const { artist, title, released, label, inCollection, albumCover } = album
  const displayButton = inCollection ? '+ my staxx' : '- my staxx'
  // const disableButton = inCollection && !showStaxx

  return (
    <article>
      <div className='spacer' />
      <div className='article-title'>
            <h2>Album Details</h2>
            <hr />
        </div>
      <section className='detail-wrapper'>
        <div className='album-detail'>
          <p><span>Artist:</span> {artist}</p>
          <p><span>Album:</span> {title}</p>
          <p><span>Released:</span> {released}</p>
          <p><span>Label:</span> {label}</p>
          <button className='detail-button' onClick={() => handlePatchInCollection(id, !inCollection)}>{displayButton}</button>
        </div>
        <img src={albumCover} alt={title} className='detail-album-art' />
      </section>
    </article>
  )
}

export default SingleAlbumDetails