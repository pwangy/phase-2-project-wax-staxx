import { useState } from "react"

export const useErrorAlerts = () => {
    const [error, setError] = useState('')
    const includeErrorAlerts = (err) => {
        setError(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
        setTimeout(() => setError(''), 5000)
        }
        return [error, includeErrorAlerts]
};

export default useErrorAlerts