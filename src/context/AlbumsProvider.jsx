import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useFetchJSON from '../utils/helpers'
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
                includeErrorAlerts(err.message)
                setTimeout(() => includeErrorAlerts(''), 5000)
            }
        })()
    }, [includeErrorAlerts])

    const handleAddAlbum = async (formData) => {
        try {
            setAlbums((currentAlbums) => {
                const lastVariableArray = currentAlbums.slice(-1)
                const id = lastVariableArray.length
                ? Number(lastVariableArray[0].id) + 1 : uuidv4()
            const updatedAlbums = [...currentAlbums, { id, ...formData}]
            return updatedAlbums
            })
            const { inCollection, artist, albumCover, title, released, label } = formData
            const currentAlbums =  albums 
            await postJSON(url, currentAlbums, { inCollection, artist, albumCover, title, released, label })
        } catch (err) {
                includeErrorAlerts(err.message)
                setTimeout(() => includeErrorAlerts(''), 5000)
                setAlbums(currentAlbums => currentAlbums.slice(0, -1))
    }}

    const inCollectionUpdate = (id) => (
        setAlbums(albums.map(album => album.id === id ? { ...album, inCollection: !album.inCollection } : album))
        )

    const handlePatchInCollection = async (id, inCollection) => {
        inCollectionUpdate(id)
        try {
            const result = await patchJSON(url, id, { inCollection : inCollection })
            includeSuccessAlerts(result)
        } catch (err) {
            includeErrorAlerts(err.message)
            setTimeout(() => includeErrorAlerts(''), 5000)
            setAlbums(currentAlbums => currentAlbums.slice(0, -1))
    }
}

    return (
        <AlbumsContext.Provider value={{ albums , handleAddAlbum , handlePatchInCollection , error}}> 
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider
