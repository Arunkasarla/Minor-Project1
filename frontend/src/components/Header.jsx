import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="app-header">
      <h3 className="logo">BVRIT</h3>

      <div className="search-box">
        <FiSearch />
        <input placeholder="Search services..." />
      </div>

      <div className="profile-circle">U</div>
    </header>
  );
};

export default Header;
