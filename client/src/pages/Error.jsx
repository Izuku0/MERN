import React from 'react'
import "./error.css"
import { NavLink } from 'react-router-dom'

export const Error = () => {
  return (
    <section id='error-page'>
        <div className='content'>
            <h1 className='header'>Oops!</h1>
            <h3>Sorry, an unexpected error has occurred.</h3>
            <p>It seems like the page you're trying to access doesn't exist.</p>
          <div className='btns'>
            <NavLink to={'/'} className='btn'>Return Home</NavLink>
            <NavLink to={'/contact'} className='btn'>Report problem</NavLink>
          </div>
        
        </div>
    </section>
  )
}
