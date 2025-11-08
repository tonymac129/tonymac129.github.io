import { Link } from "react-router";
import { logo, dark, light, projectData, infoData } from "../assets/assets";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("tonymac129-mode")) || false);
  const [search, setSearch] = useState("");
  const all = [...projectData.projects, ...infoData.posts];
  const [display, setDisplay] = useState(all);
  const [searching, setSearching] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearching(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("tonymac129-mode", mode);
    if (mode) {
      document.body.className = "light";
    } else {
      document.body.className = "";
    }
  }, [mode]);

  useEffect(() => {
    if (search.trim().length > 0) {
      let q = search.trim().toLowerCase();
      setDisplay(
        all.filter(
          (item) =>
            item.name?.toLowerCase().includes(q) ||
            item.title?.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q) ||
            item.text?.toLowerCase().includes(q)
        )
      );
    }
  }, [search]);

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
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
      <div className="nav-functions">
        <div className="nav-search-container" onClick={() => setSearching(true)} ref={searchRef}>
          <input
            placeholder="Search TonyMac129"
            className="nav-search"
            value={search}
            onInput={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && searching && display.length > 0 && (
            <div className="nav-search-results">
              {display.slice(0, 5).map((item) => {
                return (
                  <div
                    onClick={() => window.open(item.link ? item.link : item.tag == "skill" ? "/#/skills" : "/#/blog", "_blank")}
                    target="_blank"
                    className="nav-search-result"
                  >
                    {item.name || item.title}
                  </div>
                );
              })}
            </div>
          )}
        </div>
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
