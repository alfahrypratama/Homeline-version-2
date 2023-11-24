// Bootstrap

//Route
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import ContactUs from "./components/ContactUs"
import Landingpage from "./components/Landingpage"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
    </Routes>
    </>
  )
}

export default App
