import React, { useState, useEffect } from "react"
import useFetchJSON , { addIdPlusOneLastArrayToNewElement as addId} from "./helpers"

const url = 'http://localhost:4000/records'

//! looking for AlbumsContext ???
export const AlbumsContext = React.createContext()

const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([])
    const { postJSON, patchJSON, deleteJSON } = useFetchJSON

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setAlbums(data)
            } catch (error) {
                alert(error)
                console.error(error)
            }
        })()
    }, [])
    console.log(albums)

const handleAddAlbum = async (formData) => {
    setAlbums((currentAlbums) => addId(currentAlbums, formData))
    try {
        // const result = await postJSON(url, { name: , image: , price:  });
        const result = await postJSON(url, { formData });
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
    };

// const handleDeleteAlbum = useCallback(() => {

// }, [])

    return (
        // <AlbumsContext.Provider value={{ albums , handleAddAlbum, handleDeleteAlbum}}>
        <AlbumsContext.Provider value={{ albums , handleAddAlbum}}>
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider