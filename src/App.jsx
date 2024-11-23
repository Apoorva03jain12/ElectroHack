import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"

function App() {
 
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/create-account" element={<CreateAccount/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
