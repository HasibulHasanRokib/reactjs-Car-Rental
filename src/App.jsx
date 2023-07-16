import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Testimonials from "./Components/Testimonials/Testimonials"
import Model from "./Components/Model/Model"
import Members from "./Components/Members/Members"
import Contact from "./Components/Contact/Contact"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/test" element={<Testimonials/>}/>
      <Route path="/model" element={<Model/>}/>
      <Route path="/team" element={<Members/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
   
    <Footer/>
    </>
  )
}

export default App
