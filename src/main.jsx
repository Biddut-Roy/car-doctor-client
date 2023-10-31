import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route'
import AuthContext from './Authprovider/AuthContext'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-7xl mx-auto'>
 
      <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>
        </QueryClientProvider>
      </React.StrictMode>
    
  </div>
  ,
)
