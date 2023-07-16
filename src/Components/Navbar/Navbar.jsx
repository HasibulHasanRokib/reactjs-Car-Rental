import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "/src/assets/logo.png"
import { useState } from "react";

const Navbar = () => {
const [show,setShow]=useState(false)

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img className="w-32" src={Logo} alt="" />
        </div>
        <ul className="nav-items">
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

        <div className="nav-btn">
          <button className="signIn">Sign In</button>
          <button className="register">Register</button>
        </div>
        <div onClick={()=>{setShow(!show)}} className="nav-menu">
         <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
         </div>
      </nav>

      <div className={`mobile-nav ${show && 'mobile-nav--open'}`}>
<span onClick={()=>{setShow(!show)}}  className="absolute top-5 text-3xl font-bold left-80 cursor-pointer">
<i className="fa-solid fa-xmark"></i>
</span>
<ul className="flex flex-col gap-10">
<li>
  <a onClick={()=>{setShow(!show)}} className="mx-4 font-bold text-2xl text-gray-600 hover:text-blue-600" href="#home">Home</a>
</li>
<li>
  <a onClick={()=>{setShow(!show)}} className="mx-4 font-bold text-2xl text-gray-600 hover:text-blue-600" href="#about">About</a>
</li>
<li>
  <a onClick={()=>{setShow(!show)}} className="mx-4 font-bold text-2xl text-gray-600 hover:text-blue-600" href="#project">Projects</a>
</li>
<li>
  <a onClick={()=>{setShow(!show)}} className="mx-4 font-bold text-2xl text-gray-600 hover:text-blue-600" href="#contact">Contact</a>
</li>
<li>
<div className="nav-mobile-btn flex flex-col">
          <button className="signIn my-4">Sign In</button>
          <button className="register">Register</button>
        </div>
</li>
</ul>
</div>
    </div>
  );
};

export default Navbar;


