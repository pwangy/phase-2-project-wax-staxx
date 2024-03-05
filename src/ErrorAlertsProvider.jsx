import React, { useContext, useState } from 'react'

const ErrorAlertsContext = React.createContext()

const ErrorAlertsProvider = ({ children }) => {
	const [error, setError] = useState('')

	const includeErrorAlerts = (err) => {
		setError(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
		setTimeout(() => setError(''), 5000)
	}
	return (
		<ErrorAlertsContext.Provider value={{ error, includeErrorAlerts }}>
			{children}
		</ErrorAlertsContext.Provider>
	)
}

export const useErrorAlerts = () => {
	const context = useContext(ErrorAlertsContext)
	if (!context) {
		throw new Error(
			'useErrorAlerts need to be used within an ErrorAlertsProvider only'
		)
	}
	return context
}

export default ErrorAlertsProvider
