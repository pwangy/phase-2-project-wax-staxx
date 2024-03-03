// import { useState } from 'react'
import { v4 as uuidv4} from "uuid"

export const useFetchJSON = () => {
    const handleRequest = async (url, method, body = null) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    const configObj = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    }

    try {
        const resp = await fetch(url, configObj)

        if (!resp.ok) {
            throw new Error('Request Failed: status: ' + resp.status)
        }

        return await resp.json()
    } catch (error) {
        throw new Error('Failed to Fetch: Is the server running?')
    }
}

    const postJSON = async (url, formData) => {
    return await handleRequest(url, 'POST', {
        inCollection: formData.inCollection,
        artist: formData.artist,
        albumCover: formData.albumCover,
        title: formData.title,
        released: formData.released,
        label: formData.label,
    })
    }

    const patchJSON = async (url, idEditingMode, formData) => {
        return await handleRequest(`${url}/${idEditingMode}`, 'PATCH', formData)
    }

    const deleteJSON = async (url, id) => {
        return await handleRequest(`${url}/${id}`, 'DELETE')
    }

    return { postJSON, patchJSON, deleteJSON }
    }



export const addIdPlusOneLastArrayToNewElement = (currentStateVariable, formData) => {
    const lastVariableArray = currentStateVariable.slice(-1)
    const id = lastVariableArray.length
    ? Number(lastVariableArray[0].id) + 1
    : uuidv4()
    return [...currentStateVariable, { id, ...formData}]
}

export default useFetchJSON