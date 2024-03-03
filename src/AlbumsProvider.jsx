import React, { useState, useEffect } from "react"
import useFetchJSON from "./helpers"

//! looking for AlbumsContext ???
export const AlbumsContext = React.createContext()

const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([])
    const { postJSON, patchJSON, deleteJSON } = useFetchJSON

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:4000/records`)
                const data = await response.json()
                setAlbums(data)
            } catch (error) {
                alert(error)
                console.error(error)
            }
        })()
    }, [])
    console.log(albums)

const handleAddAlbum = async () => {
    try {
        const result = await postJSON('your-post-endpoint', { name: 'example', image: 'example.jpg', price: 10 });
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