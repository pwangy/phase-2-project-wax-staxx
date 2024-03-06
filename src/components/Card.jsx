import { useContext } from 'react'
import { AlbumsContext } from '../context/AlbumsProvider'
import { Link } from 'react-router-dom'

const Card = ({ id, inCollection, artist, albumCover, title}) => {
    const { handlePatchInCollection } = useContext(AlbumsContext)
    const displayButton = inCollection ? 'Delete Album Your Library' : 'Add Album To Your Library'

    return (
        <section className='card'>
           <Link to={`/album/${id}`}>
            <img src={albumCover} alt={title} className='album-art' />
            </Link>
            <p className='album-title'>{title}</p>
            <p className='artist'>{artist}</p>
            <button onClick={() => handlePatchInCollection(id, inCollection)}>{displayButton}</button>
        </section>
)}

export default Card
