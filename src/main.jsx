import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProviderContext from './Providers/AuthProviderContext'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviderContext>
    <ToastContainer />
  </React.StrictMode>,
)
