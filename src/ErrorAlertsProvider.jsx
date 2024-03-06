import React, { useContext, useState } from 'react'

const ErrorAlertsContext = React.createContext()

const ErrorAlertsProvider = ({ children }) => {
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

	const includeErrorAlerts = (err) => {
		setError(`Re-attempt Action: Process Failed.\nIssue: ${err.message}`)
		setTimeout(() => setError(''), 5000)}

	const includeSuccessAlerts = ({inCollection, title}) => {
		const addedToMyStaxx = `You Have Successfully Added ${title} To Your MyStaxx`
		const removedFromMyStaxx = `You Have Successfully Removed ${title} From Your MyStaxx`
		setSuccess(inCollection ? addedToMyStaxx : removedFromMyStaxx)
		setTimeout(() => setSuccess(''), 5000)}


	return (
		<ErrorAlertsContext.Provider value={{ error, includeErrorAlerts , includeSuccessAlerts , success}}>
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
