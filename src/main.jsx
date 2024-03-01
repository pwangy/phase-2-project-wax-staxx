//! this is index.js
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.js'
import LibraryProvider from "./LibraryProvider.js"
import './index.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(

  <LibraryProvider>
    <RouterProvider router={router} />
  </LibraryProvider>
)
