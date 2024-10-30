import {Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Service } from "./pages/Service.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./pages/Footer.jsx";
import { Error } from "./pages/Error.jsx";
import { Logout } from "./pages/Logout.jsx";
import { AdminUsers } from "./pages/AdminUsers.jsx";
import { AdminContacts } from "./pages/AdminContacts.jsx";
import { AdminUpdate } from "./pages/AdminUpdate.jsx";
import { AdminLayout } from "./components/layouts/admin-layout.jsx";




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