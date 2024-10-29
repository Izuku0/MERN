import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { redirect } from "react-router-dom";


export const Logout = () => {
    const { logout } = useAuth()
  
    useEffect(() => {
        logout()
    },[logout])

   
  return <Navigate to="/login" />

  
}