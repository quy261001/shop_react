import React from 'react'
import ReactDOM from 'react-dom/client'
import './common/styles/globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
