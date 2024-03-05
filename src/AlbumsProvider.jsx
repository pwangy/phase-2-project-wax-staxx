import React, { useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'
// import { addIdPlusOneLastArrayToNewElement as addId } from './helpers'
import useFetchJSON from './utils/helpers'
import { useErrorAlerts } from './ErrorAlertsProvider'

export const AlbumsContext = React.createContext()
export const url = 'http://localhost:4000/records'

const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([])
    const { postJSON, deleteJSON } = useFetchJSON()
    const { error, includeErrorAlerts } = useErrorAlerts()
    // console.log('this is postJSON' + postJSON)

    useEffect(() => { // initial data fetch
        (async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setAlbums(data)
            } catch (err) {
                includeErrorAlerts(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
                setTimeout(() => includeErrorAlerts(''), 5000)
            }
        })()
    }, [includeErrorAlerts])
    // console.log(albums)

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
                // console.log(inCollection, artist, albumCover, title, released, label)
            const currentAlbums =  albums 
            const result = await postJSON(url, currentAlbums, { inCollection, artist, albumCover, title, released, label })
                // console.log(result) //! we can use result to display a 'success notification later'
        } catch (err) {
                includeErrorAlerts(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
                setTimeout(() => includeErrorAlerts(''), 5000)
                setAlbums(currentAlbums => currentAlbums.slice(0, -1))  //!This portion needs to be tested after Nav added - turn server off, attempt
    }}
    
        // We need to add a 'handleChangeEditingMode callback function that changes state based on when a album is selected for edit and pass that editing mode here to allow us to use it as the ID portion of the URL/JSON to PATCH' //!DE-COMMENT TO READ BETTER
    // const handlePatchAllAlbums = async (updatedAlbum) => {

    //     setAlbums(currentAlbums => currentAlbums.map(album => {
    //         album.id === updatedAlbum.id ? updatedAlbum : album
    //     }))
    //     try {
    //         const { inCollection, artist, albumCover, title, released, label } = updatedAlbum
    //         console.log(inCollection, artist, albumCover, title, released, label)
    //         const result = await postJSON(`${url}/${isEditingMode}`, { inCollection, artist, albumCover, title, released, label })
    //         console.log(result)
    //     } catch (err) {
    //         includeErrorAlerts(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
    //         setTimeout(() => includeErrorAlerts(''), 5000)
    //         setAlbums(currentAlbums => currentAlbums.slice(0, -1))  //!This portion needs to be tested after Nav added - turn server off, attempt
    //     }
    // }

    const patchJSON = async (url, idOrIdEditingMode, plantToUpdate) => {
        const resp = await fetch(`${url}/${idOrIdEditingMode}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantToUpdate)
        });
        if (!resp.ok) {
            throw new Error("Failed to fetch because server is not running");
        }
        return await resp.json();
    }
    const inCollectionUpdate = (id) => (
        setAlbums(albums.map(album => album.id === id ? { ...album, inCollection: !album.inCollection } : album))
        )

    const handlePatchInCollection = async (id, inCollection) => {
        inCollectionUpdate(id)
        try {
            const result = await patchJSON(url, id, { inCollection : inCollection })
            console.log(result)
        } catch (err) {
            includeErrorAlerts(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
            setTimeout(() => includeErrorAlerts(''), 5000)
            setAlbums(currentAlbums => currentAlbums.slice(0, -1))  //!This portion needs to be tested after Nav added - turn server off, attempt
    } }

    const handleDeleteAlbum = async (albumToDelete) => {
        setAlbums(currentAlbums => currentAlbums.filter(album => album.id !== albumToDelete.id))
        try {
            const result = await postJSON(url, albumToDelete ) // Setup for albumToDelete to be an id! Can grab ID on click or need to destructure prior to this
            console.log(result)
        } catch (err) {
            includeErrorAlerts(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
            setTimeout(() => includeErrorAlerts(''), 5000)
            setAlbums(current => [...current, albumToDelete]) //!This portion needs to be tested after Nav added - turn server off, attempt
        }
        // .then(() => navigate('/projects'))
    }

    return (
        //! We add handlePatchAllAlbums here once ready
        <AlbumsContext.Provider value={{ albums , handleAddAlbum, handleDeleteAlbum , handlePatchInCollection , error}}> 
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider
