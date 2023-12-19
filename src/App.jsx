// Bootstrap

//Route
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ContactUs from "./pages/ContactUs"
import Landingpage from "./pages/Landingpage"
import Homepage from "./pages/Homepage"
import PropertyDetail from "./pages/PropertyDetail"
import SearchResult from "./pages/SearchResult"
import Favorite from "./pages/Favorite"
import JasaNotaris from "./pages/JasaNotaris"
import Blog from "./pages/Blog"
import DetailBlog from "./pages/DetailBlog"
import JualProperti from "./pages/JualProperti"
import NotarisAdmin from "./pages/NotarisAdmin"
import Verifnotaris from "./pages/Verifnotaris"
import Admin_lihatpelanggan from "./pages/Admin_lihatpelanggan"
import Admin_profil from "./pages/Admin_profil"



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage />}/>
      <Route path="/auth/login" element={<Login />}/>
      <Route path="/auth/register" element={<Register />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="/homepage" element={<Homepage />}/>
      <Route path="/detail" element={<PropertyDetail />}/>
      <Route path="/search-result" element={<SearchResult />}/>
      <Route path="/favorite" element={<Favorite />}/>
      <Route path="/jasa-notaris" element={<JasaNotaris />}/>
      <Route path='/blog' element={<Blog />} />
      <Route path='/detailblog' element={<DetailBlog />} />
      <Route path='/jualproperti' element={<JualProperti />} />
      
      <Route path='/NotarisAdmin' element={<NotarisAdmin />}/>
      <Route path='/Verifnotaris' element={<Verifnotaris />}/>
      <Route path='/Admin_lihatpelanggan' element={<Admin_lihatpelanggan />}/>
      <Route path='/Admin_profil' element={<Admin_profil />}/>

    </Routes>
    </>
  )
}

export default App
