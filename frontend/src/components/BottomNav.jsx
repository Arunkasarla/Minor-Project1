import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/user">Home</Link>
      <Link to="/user/history">Bookings</Link>
      <Link to="/provider">Provider</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default BottomNav;
