//Card for both Album and MyAlbums - needs ternary 

const Card = ({ id, artist, albumCover, title }) => {
    console.log(id)

    return (
        <article className='card'>
            <img src={albumCover} alt={title} className='album-art' />
            <p>{title}</p>
            <p>{artist}</p>
        </article>
    )
}

export default Card