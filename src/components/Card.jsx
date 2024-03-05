import { useContext } from "react"
import { AlbumsContext } from "../AlbumsProvider"

const Card = ({ id, inCollection, artist, albumCover, title , showStaxx}) => {
    const { handlePatchInCollection } = useContext(AlbumsContext)

    const displayButton = showStaxx ? 'Delete Album Your Library' : 'Add Album To Your Library'

    return (
        <article className='card'>
            <img src={albumCover} alt={title} className='album-art' />
            <p className='album-title'>{title}</p>
            <p className='artist'>{artist}</p>
            <button onClick={() => handlePatchInCollection(id, inCollection )}>
            {displayButton}
            </button>
        </article>
)}

export default Card
