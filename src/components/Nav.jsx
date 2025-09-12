import { Link } from "react-router";
import { logo } from "../assets/assets";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src={logo} />
        <span className="nav-logo-text">TonyMac129</span>
      </Link>
      <div className="nav-links">
        <Link to="/featured" className="nav-link">
          Featured
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/skills" className="nav-link">
          Skills
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
