const Card = ({ artist, albumCover, title }) => {
    return (
        <article className='card'>
            <img src={albumCover} alt={title} className='album-art' />
            <p className='album-title'>{title}</p>
            <p className='artist'>{artist}</p>
        </article>
)}

export default Card