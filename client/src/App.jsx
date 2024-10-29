import {Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./pages/Footer";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/admin-layout";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminContacts } from "./pages/AdminContacts";
import { AdminUpdate } from "./pages/AdminUpdate";



const App = ()=>{
  return(
   <> 
   <Navbar/>
   <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*"  element={<Error/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>} />
          <Route path="contacts" element={<AdminContacts/>} />
          <Route path="/admin/users/:id">
              <Route path="edit"  element={<AdminUpdate/>}/>
          </Route>
        </Route>
    </Routes>
    <Footer/>
   </>
  )
}

export default App;