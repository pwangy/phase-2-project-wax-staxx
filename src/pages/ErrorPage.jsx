import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='err'>{error.error.message}</div>
)}

// ! Vinny to look at this
// export const useErrorAlerts = () => {
//     const [error, setError] = useState('')
//     const includeErrorAlerts = (err) => {
//         setError(Re-attempt Action: Process Failed.\nIssue: ${err.message})
//         setTimeout(() => setError(''), 5000)
//         }
//         return [error, includeErrorAlerts]
// };

export default ErrorPage
