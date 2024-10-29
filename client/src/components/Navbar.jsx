import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../store/auth';



const MountainIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);


export const Navbar = () => {
  const { isLoggedIn,isAdmin } = useAuth();
  return (
    <>

    <nav>
    <header>
        <NavLink to={"/"} className="logo">
          <MountainIcon className="mountain-icon" />
          <span className="sr-only">Acme Inc</span>
        </NavLink>
        <nav className="main-nav">
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/service"}>Services</NavLink>
          {isLoggedIn ? <NavLink to={"/logout"}>Logout</NavLink> :
          <>
           <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink> 
          </>
          }
          {
            isAdmin ? <NavLink to={"/admin"}>Admin</NavLink> : null
          }
          
          
        </nav>
      </header>
    </nav>
{/* <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <Laptop className="logo-icon" />
        </NavLink>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/service">Services</NavLink>
                        
        </div>
        <div className={`navbar-buttons ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to={"/login"} className="btn btn-login">Login</NavLink>
          <NavLink to={"/register"} className="btn btn-register">Register</NavLink>
        </div>
      </div>
      </nav> */}



    
        {/* <header>
            <div className="container">
                <div className="logo-brand">
                    <a href="/">Synthia</a>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header> */}
    </>
  )
}
