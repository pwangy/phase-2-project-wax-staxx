import { useNavigate, useRouteError } from 'react-router-dom'

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
		<div className='err-wrapper'>
			<h1>Whoops! { error.error.message }</h1>
			<button onClick={handleGoBackAPage} className='err'>Get Back</button>
			<button onClick={handleGoToHome} className='err'>Return Home</button>
		</div>
	)
}

export default ErrorPage
