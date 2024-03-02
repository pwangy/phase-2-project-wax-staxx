import { useMemo } from 'react'
import Card from '../components/Card'

const Library = ({ albums }) => {
    const renderAlbums = useMemo(() => albums.map(a => <Card key={a.id} {...a} />
    ), [albums])

    return (
        <>
            <h2>Library</h2>
            {renderAlbums}
        </>
)}

export default Library