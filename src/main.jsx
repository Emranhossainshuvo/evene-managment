import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProviderContext from './Providers/AuthProviderContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviderContext>
  </React.StrictMode>,
)
