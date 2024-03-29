// import { useState } from 'react'
import { v4 as uuidv4} from 'uuid'

const useFetchJSON = () => {
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
            const res = await fetch(url, configObj)
            if (!res.ok) {
                throw new Error('Request Failed: status: ' + res.status)
            }
            return await res.json()
        } 
        catch (error) {
            throw new Error('Failed to Fetch: Is the server running?')
        }
    }

    const postJSON = async (url, currentStateVariable, formData) => {
        const lastVariableArray = currentStateVariable.slice(-1)
        const id = lastVariableArray.length ? String(Number(lastVariableArray[0].id) + 1) : uuidv4()
            return await handleRequest(url, 'POST', {
                id,
                inCollection: formData.inCollection,
                artist: formData.artist,
                albumCover: formData.albumCover,
                title: formData.title,
                released: formData.released,
                label: formData.label,
            }
        )
    }

    const patchJSON = async (url, idOrIdEditingMode, formData) => {
        return await handleRequest(`${url}/${idOrIdEditingMode}`, 'PATCH', formData)
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
    return [...currentStateVariable, { id, ...formData }]
}

export default useFetchJSON
