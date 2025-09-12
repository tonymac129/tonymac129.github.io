import { useState } from "react";
import Project from "../components/Project";
import { projectData } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import "./Project.css";
import { Link } from "react-router";
import Hero from "../components/Hero";

function Projects() {
  const [projectID, setProjectID] = useState(0);
  const [next, setNext] = useState(false);
  const length = projectData.projects.length;
  const project = projectData.projects[length - 1 - projectID];

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="project-wrap"
    >
      <title>{`${project.name} | TonyMac129`}</title>
      <Hero
        title="Projects"
        description={
          <p>
            The coding projects showcased here are ones I've put some effort into, for simple or unfinished learning pages, and
            non-coding projects, view the{" "}
            <Link to="/projects/archived" className="project-link">
              Archived
            </Link>{" "}
            page.
          </p>
        }
      />
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
    </motion.div>
  );
}

export default Projects;
