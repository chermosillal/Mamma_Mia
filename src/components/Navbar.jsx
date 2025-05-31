import "../assets/css/navbar.css";

const toggleMenu = () => {
  const menuLinks = document.querySelector(".nav-links");
  menuLinks.classList.toggle("active");
};

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="title">Pizzeria Mamma Mia</h1>
        <button className="hamburger" onClick={toggleMenu}>☰</button>
        <ul className="nav-links">
          <li><a href="#">🍕 Home</a></li>
          <li><a href="#">🔓 Profile</a></li>
          <li><a href="#">🔒 Logout</a></li>
          <li><a href="#">🔐 Login</a></li>
          <li><a href="#">🔐 Register</a></li>
        </ul>
        </div>
      <div className="total">🛒 Total: $0.00</div>
    </nav>
  );
};

export default Navbar;

