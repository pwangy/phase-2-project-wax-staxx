import { useErrorAlerts } from "../ErrorAlertsProvider"
import { useNavigate, useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    const handleGoBackAPage = () => {
        navigate(-1)
    }
    
    const handleGoToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <h1> {error.error.message} </h1>
            <button onClick={handleGoBackAPage}> Go Back a Page </button>
            <button onClick={handleGoToHome}> Return Home </button>
        </div>
    )
}

export default ErrorPage