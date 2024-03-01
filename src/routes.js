import { createBrowserRouter } from 'react-router-dom'
import App, { libraryLoader } from './App'
import Library from './pages/Library'
import MyStaxx from './pages/MyStaxx'
import Form from './pages/Form'
import ErrorPage from './pages/ErrorPage'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: libraryLoader,
        children: [
            {
                path: '/',
                element: <Library />
            },
            {
                path: '/lib/my-staxx',
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