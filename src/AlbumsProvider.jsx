import React, { useState, useEffect } from "react"
import { addIdPlusOneLastArrayToNewElement as addId } from "./helpers";
import useFetchJSON from "./helpers"

const url = 'http://localhost:4000/records'

//! looking for AlbumsContext ???
export const AlbumsContext = React.createContext()

const AlbumsProvider = ({ children }) => {
    const [albums, setAlbums] = useState([])
    const { postJSON, patchJSON, deleteJSON } = useFetchJSON();
    console.log("this is postJSON" + postJSON)

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

    // inCollection: true,
    // artist: '',
    // albumCover: '',
    // title: '',
    // released: '',
    // label: '',

    const handleAddAlbum = async (formData) => {
        setAlbums((currentAlbums) => addId(currentAlbums, formData));
        try {
            const { inCollection, artist, albumCover, title, released, label } = formData;
            console.log(inCollection, artist, albumCover, title, released, label)
            const result = await postJSON(url, { inCollection, artist, albumCover, title, released, label });
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        // <AlbumsContext.Provider value={{ albums , handleAddAlbum, handleDeleteAlbum}}>
        <AlbumsContext.Provider value={{ albums , handleAddAlbum}}>
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider