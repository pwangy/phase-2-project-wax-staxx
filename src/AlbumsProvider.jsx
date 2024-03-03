import React, { useState, useEffect } from "react"
// import React, { useState, useEffect, useCallback } from "react";

//! looking for AlbumsContext ???
export const AlbumsContext = React.createContext()

const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([]);

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
   

// const handleAddAlbum = useCallback(() => {

// }, [])

// const handleDeleteAlbum = useCallback(() => {

// }, [])

    return (
        // <AlbumsContext.Provider value={{ albums , handleAddAlbum, handleDeleteAlbum}}>
        <AlbumsContext.Provider value={{ albums }}>
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider