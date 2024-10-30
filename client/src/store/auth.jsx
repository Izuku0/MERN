import { useEffect } from "react";
import { createContext,useContext, useState } from "react";


export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setuser] = useState("")
    const [service,setService] = useState([])
    const [admin,setAdmin] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    const authorizationToken = `Bearer ${token}`
    const storeInLS = (token) => {
        setToken(token)
      const local_LS =  localStorage.setItem("token",token)
      return local_LS
    }

    const isLoggedIn = !!token;
    const isAdmin = !!admin;
    

    const logout = () => {
        setToken("")
      localStorage.removeItem("token")
    }

    //=============Auth=========//
    const userAuthentication = async () =>{
        try {
            setIsLoading(true)
            const response = await fetch("https://mern-1-jnnc.onrender.com/api/auth/user",{
                method:"GET",
                headers:{
                    "Authorization":authorizationToken,
                }
            });
            if(response.ok){
                const data = await response.json()
                setAdmin(data.userdata.isAdmin)
                setuser(data.userdata)
                setIsLoading(false)
                
            }else{
                setIsLoading(false)
            }
        } catch (error) {
            console.log("Error fetching user data");
            
        }
    }

    const services = async () => {
        try {
            const response = await fetch("https://mern-1-jnnc.onrender.com/api/data/service",{
              method:"GET",
            } 
            )
          
            if(response.ok){
              const data = await response.json();
              setService(data.msg)
            }
            
          } catch (error) {
            console.log("error in service",error);
            
          }
          
        
    }

    useEffect(()=>{
        services()
        userAuthentication()
       
    },[])

    return (
        <AuthContext.Provider value={{isLoggedIn,storeInLS,logout,user,service,isAdmin,authorizationToken,token,isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const AuthContextValue =  useContext(AuthContext)
    if(!AuthContextValue) throw new Error("useAuth must be used within AuthContextProvider")
    return AuthContextValue
}
