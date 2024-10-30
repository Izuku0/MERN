import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import './adminlayout.css'
import { useAuth } from '../../store/auth'
export const AdminLayout = () => {
    console.log("Hello World")
    
    const {user,isLoading} = useAuth()
    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(!user.isAdmin){
        return <Navigate to="/"/>
    }



  return (
    <>
        <header className="admin-header">
    <h2 className="admin-title">Admin</h2>
    <div className="admin-container">
        <nav className="admin-nav">
            <ul className="admin-nav-list">
                <li className="admin-nav-item">
                    <NavLink to="/admin/users" className="admin-nav-link">Users</NavLink>
                </li>
                <li className="admin-nav-item">
                    <NavLink to="/admin/contacts" className="admin-nav-link">Contacts</NavLink>
                </li>
                <li className="admin-nav-item">
                    <NavLink to="/service" className="admin-nav-link">Services</NavLink>
                </li>
                <li className="admin-nav-item">
                    <NavLink to="/" className="admin-nav-link">Home</NavLink>
                </li>
            </ul>
        </nav>
    </div>
</header>
        <Outlet/>
    </>
  )
}
