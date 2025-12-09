import {
  html,
  css,
  js,
  react,
  nextjs,
  tailwind,
  java,
  python,
  csharp,
  unity,
  mongodb,
  node,
  express,
  webdesign,
  cli,
  typing,
  basketball,
  chinese,
  diabolo,
  cubing,
} from "../assets/assets";
import InfoModal from "./InfoModal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Skill({ name, percent = null, date = null, description, info }) {
  const [open, setOpen] = useState(false);

  const icons = {
    html,
    css,
    javascript: js,
    react,
    nextjs,
    tailwind,
    java,
    python,
    csharp,
    unity,
    webdesign,
    cli,
    typing,
    basketball,
    chinese,
    diabolo,
    cubing,
    node,
    mongodb,
    express,
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return (
    <>
      <div
        className="skill-card"
        onClick={() => {
          setOpen(true);
        }}
        title="Click on me!"
      >
        <div className="skill-content">
          {percent && (
            <img src={icons[name.replace(" ", "").replace(".", "").toLowerCase()] || icons.csharp} className="skill-img" />
          )}
          <div className="skill-text">
            <h2 className={`skill-name ${percent == null ? "post-name" : ""}`}>{name}</h2>
            {date && <p className="post-date">{date}</p>}
            <p className="skill-status">{description}</p>
          </div>
        </div>
        {percent && (
          <div className="skill-level">
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: percent + "%" }}></div>
            </div>
            {percent}%
          </div>
        )}
      </div>
      <AnimatePresence>{open && <InfoModal info={info} setOpen={setOpen} fromBlog={!percent} />}</AnimatePresence>
    </>
  );
}

export default Skill;
