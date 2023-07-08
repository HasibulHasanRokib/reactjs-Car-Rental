import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img className="w-32" src="/src/assets/logo.png" alt="" />
        </div>
        <ul className="nav-items">
          <li>
            <a className="nav-item active" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-item" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-item" href="#">
              Vehicle Models
            </a>
          </li>
          <li>
            <a className="nav-item" href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a className="nav-item" href="#">
              Our Team
            </a>
          </li>
          <li>
            <a className="nav-item" href="#">
              Contact
            </a>
          </li>
        </ul>

        <div>
          <button className="signIn">Sign In</button>
          <button className="register">Register</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
