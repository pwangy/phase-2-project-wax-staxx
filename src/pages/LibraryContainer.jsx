import { useContext } from 'react'
// import { useOutletContext } from 'react-router-dom'

import { AlbumsContext } from '../AlbumsProvider'
import Library from './Library'
// import MyStaxx from '../pages/MyStaxx'

const LibraryContainer = () => {
    const { albums } = useContext(AlbumsContext)

    return (
        <>
            {/* maybe search does live here ? */}
            <Library albums={albums} />
        </>
)}

export default LibraryContainer