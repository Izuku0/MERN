import { StrictMode } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './store/auth.jsx'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <StrictMode>
    <BrowserRouter> 
         <App />
    <ToastContainer/>
    </BrowserRouter>
  </StrictMode>
  </AuthContextProvider>
)
