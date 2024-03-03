import { useContext } from 'react'
import { AlbumsContext } from '../AlbumsProvider'
import Library from './Library'

const LibraryContainer = () => {
    const { albums } = useContext(AlbumsContext)

    return (
        <>
            <Library albums={albums} />
            {/* should Staxx live for centralization of filter/search logic? would this change our routes? or do we need to add an Outlet? */}
        </>
)}

export default LibraryContainer