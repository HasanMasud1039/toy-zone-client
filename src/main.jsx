import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routes/Route';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <div className='md:max-w-screen-xl overflow-x-hidden md:mx-auto'>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    </AuthProvider>,
  </QueryClientProvider>
)
