import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <h2 className="logo">BVRIT</h2>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register" className="btn">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
