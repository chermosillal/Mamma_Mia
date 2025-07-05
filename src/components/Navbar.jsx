// Navbar.jsx
import "../assets/css/navbar.css";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 👈 Importa el contexto

const toggleMenu = () => {
  const menuLinks = document.querySelector(".nav-links");
  menuLinks.classList.toggle("active");
};

const Navbar = () => {
  const { total } = useCart(); // 👈 Obtiene el total desde el contexto
  const token = true; // Simulación de sesión

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="title">Pizzeria Mamma Mia</h1>
        <button className="hamburger" onClick={toggleMenu}>☰</button>
        <ul className="nav-links">
          <li><Link to="/">🍕 Home</Link></li>
          {token ? (
            <>
              <li><Link to="/profile">🔓 Profile</Link></li>
              <li><Link to="/logout">🔒 Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">🔐 Login</Link></li>
              <li><Link to="/register">🔐 Register</Link></li>
            </>
          )}
        </ul>
      </div>

      <Link to="/cart">
        <button className="total">
          🛒 Total: {total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;


