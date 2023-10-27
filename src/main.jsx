import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route'
import AuthContext from './Authprovider/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-7xl mx-auto'>
    <React.StrictMode>
   <AuthContext>
   <RouterProvider router={router} />
   </AuthContext>
  </React.StrictMode>
  </div>
  ,
)
