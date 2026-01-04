import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
  // import  ToastContainer  from 'react-toastify';
import { RouterProvider } from "react-router/dom";
import router from './routes/router.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
// import { AuthContext } from './contexts/AuthContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
        <ToastContainer />
    </AuthProvider>
   
  </StrictMode>,
)
