import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'

import { toast } from 'react-toastify'
// import './admincontact.css'

export const AdminContacts = () => {

  const {authorizationToken} = useAuth()
  const [data,setData] = useState([])

  const AdminContacts = async () => {
    try {
      const response = await fetch (`https://mern-1-jnnc.onrender.com/api/admin/contacts`, {
        method:"GET",
        headers:{
         
          Authorization:authorizationToken
        },
      })
      const jsondata = await response.json()
      setData(jsondata)
   
      
    } catch (error) {
      console.log("error in admincontacts",error);
      
    }
  }

  const deleteUser = async (id)=>{

    try {
      const response = await fetch(`https://mern-1-jnnc.onrender.com/api/admin/contacts/delete/${id}`,{
          method:'DELETE',
          headers:{
              Authorization:authorizationToken
          }
      });
      const data = await response.json()
      if(response.ok){
         AdminContacts()
         toast.warn("Contact Deleted Successfully")
      }
    } catch (error) {
     console.log("Error deleting user",error);
     
    }
     
 }
 

  useEffect(() => {
    AdminContacts()
  }, [])

  return (
    <>
       <section className="admin-section">
      <div className="container">
        <h1 className="section-title">Admin Conatct Data</h1>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curUser, index) => (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.message}</td>
                  <td>
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
