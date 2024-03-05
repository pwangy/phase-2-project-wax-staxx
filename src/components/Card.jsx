const Card = ({ id, artist, albumCover, title, inCollection, handleCollection, action }) => {

    return (
        <section className='card' onClick={() => handleCollection({ id, inCollection }, action)}>
            <img src={albumCover} alt={title} className='album-art' />
            <p className='album-title'>{title}</p>
            <p className='artist'>{artist}</p>
        </section>
)}

export default Card
