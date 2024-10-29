import React from 'react'
import { useState } from 'react'
import { useAuth } from '../store/auth'

import "./contact.css"



export const Contact = () => {
  const [contact,setContact] = useState({
    username:"",
    email:"",
    message:""
  })
  

  const [userData,setUserData] = useState(true)
  const {user} = useAuth()

  if(userData && user){
      setContact({
        username:user.username,
        email:user.email,
        message:""
      })

      setUserData(false)
  }
  const handleChange = (e)=>{
    const {name,value} = e.target

    setContact({...contact,[name]:value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()

    console.log(contact)
    try {
      const response = await fetch ("http://localhost:5000/api/contact/contact", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(contact)
      })
      console.log(response);
      if(response.ok){
        alert("message sent successfully")
        setContact({
          username:"",
          email:"",
          message:""
        })
      }
      
    } catch (error) {
      console.log("error in conatct",error);
      
    }

  }


  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="registration-page">
    <div className="registration-container">
      <div className="image-container">
        <img
          src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Technology earth"
          className="registration-image"
        />
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={contact.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={contact.email} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Message</label>
          <div className="password-input">
            {/* <input
              type="textArea"
              id="password"
              name="password"
              value={contact.password}
              onChange={handleChange} 
              required
            /> */}
           <textarea className='password-input"' name="message" value={contact.message} onChange={handleChange}  rows="4" cols="50">

           </textarea>
              
            
          </div>
        </div>
        <button type="submit" className="register-button">Submit</button>
      </form>
    </div>
    </div>
  )
}
