// Bootstrap

//Route
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ContactUs from "./pages/ContactUs"
import Landingpage from "./pages/Landingpage"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="/homepage" element={<Homepage />}/>
    </Routes>
    </>
  )
}

export default App
