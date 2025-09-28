import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Skill from "../components/Skill";
import "./Blog.css";
import { useEffect, useState } from "react";
import { infoData } from "../assets/assets";
const posts = [...infoData.posts];
const categories = ["skill", "personal", "entertainment", "other"];

function Blog() {
  const [final, setFinal] = useState(posts);
  const [filter, setFilter] = useState(-1);
  const [display, setDisplay] = useState(posts);

  useEffect(() => {
    handleSort("recent");
  }, []);

  useEffect(() => {
    if (filter === -1) {
      setDisplay(final);
    } else {
      setDisplay(final.filter((post) => post.tag == categories[filter]));
    }
  }, [final, filter]);

  function handleSort(value) {
    let sorted = [...posts];
    switch (value) {
      case "recent":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "publish":
        sorted.sort((a, b) => new Date(b.release) - new Date(a.release));
        break;
      case "alphabetical":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
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
      <title>Blog | TonyMac129</title>
      <Hero
        title="My Blog"
        description="Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much."
      />
      <div className="content">
        <div className="skill-functions">
          <select className="skill-sort" onChange={(e) => handleSort(e.target.value)}>
            <option selected disabled>
              Sort by
            </option>
            <option value="recent">Recent</option>
            <option value="publish">Publish date</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
          <div className="skill-filters">
            {categories.map((category, i) => {
              return (
                <div className={`skill-filter ${filter == i ? "skill-selected" : ""}`} onClick={() => handleFilter(i)}>
                  {category[0].toUpperCase() + category.slice(1)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="skills">
          {display.map((post) => {
            return <Skill name={post.title} description={post.text.slice(0, 60) + "..."} date={post.date} info={post} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
