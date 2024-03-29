//! this is index.js
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import  router  from './utils/routes.jsx'
import AlbumsProvider from './context/AlbumsProvider.jsx'
import './index.scss'
import ErrorAlertsProvider from './context/ErrorAlertsProvider.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <ErrorAlertsProvider>
        <AlbumsProvider>
            <RouterProvider router={router} />
        </AlbumsProvider>
    </ErrorAlertsProvider>
)
