import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
// import { addIdPlusOneLastArrayToNewElement as addId } from './helpers'
import useFetchJSON from './utils/helpers'
import { useErrorAlerts } from './ErrorAlertsProvider'

export const AlbumsContext = React.createContext()
export const url = 'http://localhost:4000/records'

const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([])
    const { postJSON, patchJSON } = useFetchJSON()
    const { error, includeErrorAlerts, includeSuccessAlerts } = useErrorAlerts()

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setAlbums(data)
            } catch (err) {
                includeErrorAlerts(err)
                setTimeout(() => includeErrorAlerts(''), 5000)
            }
        })()
    }, [includeErrorAlerts])

    const handleAddAlbum = async (formData) => {
            setAlbums((currentAlbums) => {
                const lastVariableArray = currentAlbums.slice(-1)
                const id = lastVariableArray.length
                ? Number(lastVariableArray[0].id) + 1 : uuidv4()
                return [...currentAlbums, { id, ...formData}]
            })
        try {
            const { inCollection, artist, albumCover, title, released, label } = formData
            const currentAlbums =  albums 
            await postJSON(url, currentAlbums, { inCollection, artist, albumCover, title, released, label })
        } catch (err) {
                includeErrorAlerts(err)
                setTimeout(() => includeErrorAlerts(''), 5000)
                setAlbums(currentAlbums => currentAlbums.slice(0, -1))
    }}

    const inCollectionUpdate = (id) => {
        setAlbums(albums.map((album) => album.id === id ? { ...album, inCollection: !album.inCollection } : album))
}

    const handlePatchInCollection = async (id, inCollection) => {
        inCollectionUpdate(id)
        try {
            const result = await patchJSON(url, id, { inCollection : inCollection })
            includeSuccessAlerts(result)
        } catch (err) {
            includeErrorAlerts(err)
            setTimeout(() => includeErrorAlerts(''), 5000)
            setAlbums(albums.map((album) => album.id === id ? { ...album, inCollection: album.inCollection } : album))  
        } 
    }

    // const handleDeleteAlbum = async (albumToDelete) => {
    //     setAlbums(currentAlbums => currentAlbums.filter(album => album.id !== albumToDelete.id))
    //     try {
    //         const result = await postJSON(url, albumToDelete ) // Setup for albumToDelete to be an id! Can grab ID on click or need to destructure prior to this
    //         console.log(result)
    //     } catch (err) {
    //         includeErrorAlerts(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
    //         setTimeout(() => includeErrorAlerts(''), 5000)
    //         setAlbums(current => [...current, albumToDelete]) //!This portion needs to be tested after Nav added - turn server off, attempt
    //     }
    //     // .then(() => navigate('/projects'))
    // }

    return (
        //! We add handlePatchAllAlbums here once ready
        <AlbumsContext.Provider value={{ albums , handleAddAlbum , handlePatchInCollection , error}}> 
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider
