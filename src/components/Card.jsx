import { useContext } from 'react'
import { AlbumsContext } from '../context/AlbumsProvider'
import { Link } from 'react-router-dom'

const Card = ({ id, inCollection, artist, albumCover, title, showStaxx}) => {
    const { handlePatchInCollection } = useContext(AlbumsContext)

    const displayButton = !showStaxx ? '+ my staxx' : '- my staxx'
    const disableButton = inCollection && !showStaxx

    return (
        <section className='card'>
            <Link to={`/album/${id}`}>
            <img src={albumCover} alt={title} className='album-art' />
            </Link>
            <p className='album-title'>{title}</p>
            <p className='artist'>{artist}</p>
            <button disabled={disableButton} className={disableButton ? 'disabled' : null} aria-disabled={disableButton ? true : false } onClick={() => handlePatchInCollection(id, !inCollection )}>
            {displayButton}
            </button>
        </section>
)}

export default Card