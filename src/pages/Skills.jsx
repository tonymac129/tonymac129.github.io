import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Skill from "../components/Skill";
import "./Skills.css";
import { useEffect, useState } from "react";
import { infoData } from "../assets/assets";

const skills = [
  { id: 0, name: "HTML", percent: 98, description: "HTML builds the content of a website.", type: ["language", "web"] },
  { id: 1, name: "CSS", percent: 95, description: "CSS styles the looks and layouts of a website.", type: ["language", "web"] },
  { id: 2, name: "JavaScript", percent: 85, description: "JavaScript makes a website interactive.", type: ["language", "web"] },
  { id: 3, name: "React", percent: 75, description: "The most popular JS component-based library.", type: ["language", "web"] },
  {
    id: 3,
    name: "MongoDB",
    percent: 50,
    description: "Beginner friendly database for full stack apps.",
    type: ["language", "web"],
  },
  {
    id: 3,
    name: "Node",
    percent: 40,
    description: "JavaScript runtime that lets JS run on servers/backend.",
    type: ["language", "web"],
  },
  {
    id: 3,
    name: "Express",
    percent: 40,
    description: "Framework for Node.js that simplifies a lot of things.",
    type: ["language", "web"],
  },
  { id: 4, name: "Python", percent: 40, description: "Python is a powerful and versatile language.", type: ["language"] },
  { id: 5, name: "Java", percent: 30, description: "Popular language that's used almost everywhere.", type: ["language"] },
  { id: 6, name: "Unity", percent: 40, description: "The most used game engine to make games.", type: ["tool"] },
  { id: 7, name: "C#", percent: 15, description: "A versatile programming language used by Unity.", type: ["language"] },
  { id: 8, name: "Web Design", percent: 70, description: "Designing a website to make it more appealing.", type: ["web"] },
  { id: 9, name: "CLI", percent: 40, description: "Using tools like Git, npm, and Vite through a terminal.", type: ["tool"] },
  { id: 10, name: "Typing", percent: 98, description: "Speed typing means typing really fast.", type: ["other"] },
  { id: 11, name: "Chinese", percent: 95, description: "The language with the most native speakers.", type: ["other"] },
  { id: 12, name: "Diabolo", percent: 85, description: "This toy is spun, thrown, or juggled with a string.", type: ["other"] },
  { id: 13, name: "Basketball", percent: 80, description: "A sport where you shoot baskets to score.", type: ["other"] },
  { id: 14, name: "Cubing", percent: 70, description: "Sorting the colors on a Rubik's cube.", type: ["other"] },
];

function Skills() {
  const [final, setFinal] = useState(skills);
  const [filter, setFilter] = useState(-1);
  const [display, setDisplay] = useState(skills);

  useEffect(() => {
    if (filter === -1) {
      setDisplay(final);
    } else {
      const categories = ["language", "web", "tool", "other"];
      setDisplay(final.filter((skill) => skill.type.includes(categories[filter])));
    }
  }, [final, filter]);

  function handleSort(value) {
    let sorted = [...skills];
    switch (value) {
      case "mastery":
        sorted.sort((a, b) => b.percent - a.percent);
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
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }}>
      <title>Skills | TonyMac129</title>
      <Hero
        title="My Skills"
        description="Here are some skills and hobbies that I know or am currently learning, with a progress bar that shows my mastery on the skill. Click on a skill to read more about it!"
      />
      <div className="content">
        <div className="skill-functions">
          <select className="skill-sort" onChange={(e) => handleSort(e.target.value)}>
            <option selected disabled>
              Sort by
            </option>
            <option value="mastery">Mastery</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="custom">Custom</option>
          </select>
          <div className="skill-filters">
            <div className={`skill-filter ${filter == 0 ? "skill-selected" : ""}`} onClick={() => handleFilter(0)}>
              Language
            </div>
            <div className={`skill-filter ${filter == 1 ? "skill-selected" : ""}`} onClick={() => handleFilter(1)}>
              Web dev
            </div>
            <div className={`skill-filter ${filter == 2 ? "skill-selected" : ""}`} onClick={() => handleFilter(2)}>
              Tool
            </div>
            <div className={`skill-filter ${filter == 3 ? "skill-selected" : ""}`} onClick={() => handleFilter(3)}>
              Other
            </div>
          </div>
        </div>
        <div className="skills">
          {display.map((skill) => {
            return (
              <Skill
                name={skill.name}
                percent={skill.percent}
                description={skill.description}
                info={infoData.posts.filter((post) => post.tag === "skill")[skill.id]}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
