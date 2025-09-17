import { useState, useEffect } from "react";
import Project from "../components/Project";
import { projectData, gallery, grid, cli, csharp, css, html, js, java, python, react, unity } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import "./Project.css";
import { Link } from "react-router";
import Hero from "../components/Hero";
import SectionImg from "../components/SectionImg";

function Projects() {
  const [projectID, setProjectID] = useState(0);
  const [next, setNext] = useState(false);
  const [isGrid, setIsGrid] = useState(false);
  const [final, setFinal] = useState(projectData.projects);
  const [filter, setFilter] = useState(-1);
  const [display, setDisplay] = useState(projectData.projects);
  const length = projectData.projects.length;
  const project = projectData.projects[length - 1 - projectID];
  const icons = { cli, csharp, css, html, js, java, python, react, unity };

  useEffect(() => handleSort("recent"), []);

  useEffect(() => {
    if (filter === -1) {
      setDisplay(final);
    } else {
      const categories = ["Web App", "Learning", "Design", "Game", "2025", "2024", "2023", "2022"];
      if (filter < 4) {
        setDisplay(final.filter((project) => project.tags.includes(categories[filter])));
      } else {
        setDisplay(final.filter((project) => project.tags[project.tags.length - 1].includes(categories[filter])));
      }
    }
  }, [final, filter]);

  function handleSort(value) {
    let sorted = [...projectData.projects];
    switch (value) {
      case "recent":
        sorted.sort((a, b) => new Date(b.tags[b.tags.length - 1]) - new Date(a.tags[a.tags.length - 1]));
        break;
      case "old":
        sorted.sort((a, b) => new Date(a.tags[a.tags.length - 1]) - new Date(b.tags[b.tags.length - 1]));
        break;
      case "alphabetical":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "default":
        break;
    }
    setFinal(sorted);
  }

  function handleFilter(index) {
    if (filter == index) {
      setFilter(-1);
    } else {
      setFilter(index);
    }
  }

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="project-wrap"
    >
      <title>{`${isGrid ? "Projects" : project.name} | TonyMac129`}</title>
      <Hero
        title="Projects"
        description={
          <>
            The coding projects showcased here are ones I've put some effort into, for simple or unfinished learning pages, and
            non-coding projects, view the{" "}
            <Link to="/projects/archived" className="project-link">
              Archived
            </Link>{" "}
            page.
          </>
        }
      />
      <div className="grid-functions">
        {isGrid && (
          <>
            <select className="skill-sort" onChange={(e) => handleSort(e.target.value)}>
              <option selected disabled>
                Sort by
              </option>
              <option value="recent">Latest</option>
              <option value="old">Oldest</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
            <div className="skill-filters">
              <div className={`skill-filter ${filter == 0 ? "skill-selected" : ""}`} onClick={() => handleFilter(0)}>
                Web app
              </div>
              <div className={`skill-filter ${filter == 1 ? "skill-selected" : ""}`} onClick={() => handleFilter(1)}>
                Learning
              </div>
              <div className={`skill-filter ${filter == 2 ? "skill-selected" : ""}`} onClick={() => handleFilter(2)}>
                Design
              </div>
              <div className={`skill-filter ${filter == 3 ? "skill-selected" : ""}`} onClick={() => handleFilter(3)}>
                Game
              </div>
              <div className={`skill-filter ${filter == 4 ? "skill-selected" : ""}`} onClick={() => handleFilter(4)}>
                2025
              </div>
              <div className={`skill-filter ${filter == 5 ? "skill-selected" : ""}`} onClick={() => handleFilter(5)}>
                2024
              </div>
              <div className={`skill-filter ${filter == 6 ? "skill-selected" : ""}`} onClick={() => handleFilter(6)}>
                2023
              </div>
              <div className={`skill-filter ${filter == 7 ? "skill-selected" : ""}`} onClick={() => handleFilter(7)}>
                2022
              </div>
            </div>
          </>
        )}
        <img
          src={isGrid ? gallery : grid}
          className="projects-icon"
          onClick={() => setIsGrid(!isGrid)}
          title={isGrid ? "Gallery view" : "Grid view"}
        />
      </div>
      {!isGrid && (
        <div>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={projectID}
              initial={{ x: next ? -300 : 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: next ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Project project={project} setProjectID={setProjectID} setNext={setNext} length={length} />
            </motion.div>
          </AnimatePresence>
          <div className="project-number">
            {projectID + 1}/{length}
          </div>
        </div>
      )}
      {isGrid && (
        <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="projects-grid">
          {display.map((project) => {
            return (
              <a href={project.link} target="_blank" className="grid-project">
                <h3 className="grid-project-name">{project.name}</h3>
                <div className="grid-project-tech">
                  {project.skills.map((skill) => {
                    return <SectionImg src={icons[skill.toLowerCase()]} title={skill} />;
                  })}
                </div>
                <div className="grid-project-tags">
                  {project.tags.map((tag) => {
                    return <div className="project-tag">{tag}</div>;
                  })}
                </div>
              </a>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
}

export default Projects;
