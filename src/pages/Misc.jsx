import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  miscData,
  cli,
  csharp,
  css,
  html,
  js,
  java,
  python,
  react,
  unity,
  mongodb,
  express,
  node,
  nextjs,
  tailwind,
  typescript,
} from "../assets/assets";
import Hero from "../components/Hero";
import SectionImg from "../components/SectionImg";
import "./Misc.css";

function Misc() {
  const icons = { cli, csharp, css, html, js, java, python, react, unity, mongodb, express, node, nextjs, tailwind, typescript };
  const [displayed, setDisplayed] = useState(miscData.projects);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDisplayed(miscData.projects.filter((project) => project.name.toLowerCase().includes(search.trim().toLowerCase())));
  }, [search]);

  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }}>
      <title>Misc | TonyMac129</title>
      <Hero
        title="Miscellaneous Stuff"
        description="You can find all my small learning projects, demos, tests, and other miscellaneous stuff here!"
      />
      <div className="content">
        <div className="misc-search-wrap">
          <input
            type="text"
            placeholder="Search misc"
            value={search}
            className="misc-search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="projects-grid">
          {displayed.length > 0 ? (
            displayed.map((project) => {
              return (
                <a href={project.link} target="_blank" className="grid-project">
                  <h3 className="grid-project-name">{project.name}</h3>
                  <div className="grid-project-tech">
                    {project.skills.map((skill) => {
                      return <SectionImg src={icons[skill.toLowerCase().replace(".", "")]} title={skill} />;
                    })}
                  </div>
                  <div className="grid-project-tags">
                    {project.tags.map((tag) => {
                      return <div className="project-tag">{tag}</div>;
                    })}
                  </div>
                </a>
              );
            })
          ) : (
            <div className="message">
              No projects found! Maybe try{" "}
              <Link to="/projects" className="project-link">
                here
              </Link>
              ?
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Misc;
