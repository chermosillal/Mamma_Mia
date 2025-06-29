import "../assets/css/navbar.css";
import { Link } from 'react-router-dom'

const toggleMenu = () => {
  const menuLinks = document.querySelector(".nav-links");
  menuLinks.classList.toggle("active");
};

const Navbar = () => {
  const total = 25000;
 //const token = false;
  const token = true;
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="title">Pizzeria Mamma Mia</h1>
        <button className="hamburger" onClick={toggleMenu}>☰</button>
        <ul className="nav-links">
          <li><a href="/">🍕 Home</a></li>
          {token ? (
            <>
              <li><a href="/profile">🔓 Profile</a></li>
              <li><a href="/logout">🔒 Logout</a></li>
            </>
          ) : (
            <>
              <li><a href="/login">🔐 Login</a></li>
              <li><a href="/register">🔐 Register</a></li>
            </>
          )}
        </ul>
      </div>
      
      <Link to="/cart"><button className="total">🛒 Total: ${total.toLocaleString("es-CL")}</button></Link>
    </nav>
  );
};

export default Navbar;

