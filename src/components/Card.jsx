const Card = ({ id, artist, albumCover, title, inCollection, handleStaxx, action }) => {

    return (
        <section className='card' onClick={() => handleStaxx({ id, inCollection }, action)}>
            <img src={albumCover} alt={title} className='album-art' />
            <p className='album-title'>{title}</p>
            <p className='artist'>{artist}</p>
        </section>
)}

export default Card
