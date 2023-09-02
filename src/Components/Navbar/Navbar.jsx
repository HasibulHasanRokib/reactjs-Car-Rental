import { NavLink } from "react-router-dom";
import Logo from "/src/assets/logo.png"
import { useState } from "react";

const Navbar = () => {

const [show,setShow]=useState(false)

  return (
    <header>
      <nav className="flex max-md:fixed md:relative max-lg:px-10 justify-between items-center w-full max-md:bg-white  z-[100] py-3 px-5  top-0">
          <img className="w-32 cursor-pointer" src={Logo} alt="" />
        <ul className="flex max-lg:hidden">
          <li>
            <NavLink className="nav-item" to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to={'/about'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to={'/model'}>
              Vehicle Models
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to={'/test'}>
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to={'/team'}>
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to={'/contact'}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="max-lg:hidden">
          <button className="font-bold text-base mx-4 ">Sign In</button>
          <button className="font-bold text-base bg-[#ff4c30] text-white px-5 py-2 rounded-md shadow-md">Register</button>
        </div>
        <div onClick={()=>{setShow(!show)}} className="lg:hidden block">
         <i className={`fa-solid ${show===true?"fa-xmark":"fa-bars"}  text-2xl cursor-pointer`}></i>
         </div>
      </nav>

      <div className={`fixed bg-white shadow-md border-2 py-6 px-4 max-md:w-3/5 w-full  transition-all  ease-linear  duration-700 translate-y-16  z-50 ${show ===true?'max-sm:translate-x-40':"translate-x-[180%]"}`}>

<ul className="flex flex-col space-y-10">
<li  className="text-2xl text-gray-600 hover:text-red-600 text-center">
  <NavLink onClick={()=>{setShow(!show)}} to={'/'}>Home</NavLink>
</li>
<li className="text-2xl text-gray-600 hover:text-red-600 text-center ">
  <NavLink onClick={()=>{setShow(!show)}} to={'/about'}>About</NavLink>
</li>
<li className="text-2xl text-gray-600 hover:text-red-600 text-center ">
  <NavLink onClick={()=>{setShow(!show)}}  to={'/model'}>Vehicle Models</NavLink>
</li>
<li className="text-2xl text-gray-600 hover:text-red-600 text-center ">
  <NavLink onClick={()=>{setShow(!show)}} to={'/test'}>Testimonials</NavLink>
</li>
<li className="text-2xl text-gray-600 hover:text-red-600 text-center ">
  <NavLink onClick={()=>{setShow(!show)}} to={'/team'}> Our Team</NavLink>
</li>
<li className="text-2xl text-gray-600 hover:text-red-600 text-center ">
  <NavLink onClick={()=>{setShow(!show)}} to={'/contact'}>Contact</NavLink>
</li>
<li>
<div className=" flex items-center justify-between max-lg:flex-col max-lg:gap-5">
          <button className="font-bold text-base bg-[#3e30ffee] text-white px-5 py-2 rounded-md shadow-md">Sign In</button>
          <button className="font-bold text-base bg-[#ff4c30] text-white px-5 py-2 rounded-md shadow-md">Register</button>
        </div>
</li>
</ul>
</div>
    </header>
  );
};

export default Navbar;


