import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/app.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async"
import HomePage from './pages/homepage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
