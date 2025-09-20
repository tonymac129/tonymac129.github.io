import { Link } from "react-router";
import { logo, dark, light } from "../assets/assets";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("tonymac129-mode")) || false);

  useEffect(() => {
    localStorage.setItem("tonymac129-mode", mode);
    if (mode) {
      document.body.className = "light";
    } else {
      document.body.className = "";
    }
  }, [mode]);

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
      <div className="nav-functions">
        <input placeholder="Search TonyMac129" className="nav-search" />
        <motion.img
          whileHover={{ scale: 1.3, rotate: 15 }}
          whileTap={{ scale: 1.1, rotate: 5 }}
          src={mode ? dark : light}
          className="nav-btn"
          onClick={() => setMode(!mode)}
          title="Toggle light mode"
        />
      </div>
    </nav>
  );
}

export default Nav;
