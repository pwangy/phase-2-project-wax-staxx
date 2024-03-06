import { useContext } from "react"
import { AlbumsContext } from "../AlbumsProvider"

const Card = ({ id, inCollection, artist, albumCover, title , showStaxx}) => {
    const { handlePatchInCollection } = useContext(AlbumsContext)

    const displayButton = !showStaxx ? '+ my staxx' : '- my staxx'
    const disableButton = inCollection && !showStaxx


    return (
        <article className='card'>
            <img src={albumCover} alt={title} className='album-art' />
            <p className='album-title'>{title}</p>
            <p className='artist'>{artist}</p>
            <button disabled={disableButton} onClick={() => handlePatchInCollection(id, !inCollection )}>
            {displayButton}
            </button>
        </article>
)}

export default Card