import patchJSON from '../utils/helpers'

const Card = ({ id, artist, albumCover, title, showStaxx, handleAddToStaxx, handleRemoveFromStaxx }) => {

    const determineAction = showStaxx ? handleRemoveFromStaxx : handleAddToStaxx
    
    const handleRemoveFromStaxx = albumToRemove => {
        const thisAlbum = albums.filter(a => a.id !== albumToRemove.id)
        console.log('setting inCollection to false!')
        patchJSON(thisAlbum)
    }

    const handleAddToStaxx = ({ e, id }) => {
        console.log(e.value)
        console.log(id)
        //use album id to find correct album to edit
        //PATCH request to url
        //update 'inCollection' value to true 
    }



    return (
        <section className='card' onClick={determineAction(id)}>
            <img src={albumCover} alt={title} className='album-art' />
            <p className='album-title'>{title}</p>
            <p className='artist'>{artist}</p>
        </section>
)}

export default Card
