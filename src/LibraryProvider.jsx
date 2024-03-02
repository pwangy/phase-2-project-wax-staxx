import React, { useState, useEffect, useCallback } from "react";

export const AlbumsContext = React.createContext()

const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:4000/records`)
                const data = await response.json()
                setAlbums(data)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])


const handleAddAlbum = useCallback(() => {

}, [])


const handleDeleteAlbum = useCallback(() => {

}, [])

    return (
        <AlbumsContext.Provider value={{ albums , handleAddAlbum, handleDeleteAlbum}}>
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider


