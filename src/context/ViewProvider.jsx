
import React, {useState} from 'react'

const ViewContext = React.createContext()

const ViewProvider = ({ children }) => {
    const [ viewStaxx, setViewStaxx] = useState(false) // default to Library View

    return (
        <ViewContext.Provider value={{viewStaxx, setViewStaxx}}>
            {children}
        </ViewContext.Provider>
)}

export { ViewContext, ViewProvider}
