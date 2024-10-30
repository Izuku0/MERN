import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from '../store/auth'
import './adminUser.css'
import { toast } from 'react-toastify'
import { Link, NavLink } from 'react-router-dom'

export const AdminUsers = () => {
    const {authorizationToken} = useAuth()
    const[users,setUsers] = useState([]);
  
    
const deleteUser = async (id)=>{

   try {
     const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
         method:"DELETE",
         headers:{
             Authorization:authorizationToken
         }
     });
   
     if(response.ok){
        getAllUserData()
        toast.warn("User Deleted Successfully")
     }
   } catch (error) {
    console.log("Error deleting user",error);
    
   }
    
}


    const getAllUserData = async () => {
       


        try {
            const response = await fetch("http://localhost:5000/api/admin/users",{
                method: "GET",
                headers:{
                    Authorization:authorizationToken,
                },
    
            }
            );
           
            setUsers(data)
        } catch (error) {
            console.log("Error fetching user data");
            
        }
    }
    useEffect(()=>{
  getAllUserData()
    },[])


  return (
   <>
  <section className="admin-section">
      <div className="container">
        <h1 className="section-title">Admin User Data</h1>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>
                    <Link to={`/admin/users/${curUser._id}/edit`} className="btn btn-edit" >Edit</Link>
                    <button className="btn btn-delete" onClick={()=> deleteUser(curUser._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
   </>
  )
}
