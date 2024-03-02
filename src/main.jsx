//! this is index.js
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import  router  from './routes.jsx'
import LibraryProvider from "./LibraryProvider.jsx"
import './index.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(

  <LibraryProvider>
    <RouterProvider router={router} />
  </LibraryProvider>

)
