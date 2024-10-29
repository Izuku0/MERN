import React from 'react'
import './service.css'
import { useAuth } from '../store/auth'

export const Service = () => {
  const {service} = useAuth()
  console.log(service);
  
  return (
        <>
        <div className='service-page'>
        <h1>Our Services</h1>
      <div className="service-grid">
        {service.map((item,index)=>{
          const {service,price,description,provider} = item
          return(
            <div key={index} className="service-card">
            <h2>{service}</h2>
            <p className="description">{description}</p>
            <div className="service-footer">
              <span className="price">Rs.{price.toFixed(2)}</span>
              <span className="provider">Provider: {provider}</span>
            </div>
          </div>
          )
        })}
        
      </div>
      {service.length === 0 && (
        <p className="no-services">No services available at the moment.</p>
      )}
        </div>

        </>
  )
}
