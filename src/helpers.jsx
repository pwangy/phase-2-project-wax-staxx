// import { useState } from 'react'
import { v4 as uuidv4} from "uuid"

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

    const resp = await fetch(url, configObj)

    if (!resp.ok) {
        throw new Error('Failed to fetch because the server is not running!')
    }

    return await resp.json()
    }

    const postJSON = async (url, formData) => {
    return await handleRequest(url, 'POST', {
        name: formData.name,
        image: formData.image,
        price: formData.price,
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