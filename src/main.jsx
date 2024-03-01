//! this is index.js
import React from 'react'
import { createRoot } from '.react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.js'
import './index.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
