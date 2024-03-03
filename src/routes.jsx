import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import LibraryContainer from './pages/LibraryContainer'
import MyStaxx from './pages/MyStaxx'
import Form from './pages/Form'
import ErrorPage from './pages/ErrorAlertsProvider'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        // loader: libraryLoader,
        children: [
            {
                path: '/',
                element: <LibraryContainer />,
            },
            {
                path: '/my-staxx',
                element: <MyStaxx />
            },
            {
                path: '/add-album',
                element: <Form />
            }
        ]
    }

])

export default router