import React, { useEffect, useState } from 'react'
import './adminupdate.css'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'


export const AdminUpdate = () => {
    const [user,setUser] =useState({
        username:"",
        email:"",
        phone:""
    })

  const params = useParams()
  const {authorizationToken} = useAuth()

    const getSingleUserData = async () =>{
      
        try {
            const response = await fetch (`http://localhost:5000/api/admin/users/${params.id}`, {
              method:"GET",
              headers:{
               
                Authorization:authorizationToken
              },
            })
            const data = await response.json()
            setUser(data)
            
          } catch (error) {
            console.log("error in adminupdate",error);
            
          }
    }
    useEffect(()=>{
        getSingleUserData()
    },[])
    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value
        setUser({...user,[name]:value})
    }
    
    const handleSubmit = async () =>{
      
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorizationToken
                },
                body:JSON.stringify(user)
            });
            if(response.ok){
                toast("user updated successfully")
            }else{
                toast("something went wrong")
            }
        
        } catch (error) {
            console.log("error in adminupdate",error);
            
        }
    }

  return (
    <>
       <div className="form-container">
    <h2>Update User Data</h2>
    <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name='username' onChange={handleChange} value={user.username} />
        </div>
        
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' onChange={handleChange} value={user.email}/>
        </div>

        <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" name='phone' onChange={handleChange} value={user.phone}/>
        </div>
        <div>
            <button type="submit">Update</button>
        </div>
        </form>
    </div>
</div>
    </>
  )
}
