import React from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'



export const Login = () => {
  const {storeInLS}  = useAuth()
  const navigate = useNavigate();
  
  const [user,setUser] = useState({
    email:"",
    password:""

  })
 
   const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user,[name]:value})
   }

   const handleSubmit = async (e) =>{
    e.preventDefault();
    
    
   
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })


      const data = await response.json();

      if(response.ok){ 
        toast.success("Logged In")
        storeInLS(data.token)
        setUser({
          email:"",
          password:""
        },
          
        // localStorage.setItem("token",data.token),
      navigate("/")
      )
      
      }else{
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.log("Login error",error);
      
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
          src="https://cdn.pixabay.com/photo/2018/07/14/11/33/earth-3537401_1280.jpg"
          alt="Technology earth"
          className="registration-image"
        />
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange} 
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button type="submit" className="register-button">Login</button>
      </form>
    </div>
    </div>
  )
}
