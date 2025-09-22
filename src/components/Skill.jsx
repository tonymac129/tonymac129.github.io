import {
  html,
  css,
  js,
  react,
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
} from "../assets/assets";
import InfoModal from "./InfoModal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Skill({ name, percent, description, info }) {
  const [open, setOpen] = useState(false);

  const icons = {
    html,
    css,
    javascript: js,
    react,
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
          <img src={icons[name.replace(" ", "").toLowerCase()] || icons.csharp} className="skill-img" />
          <div className="skill-text">
            <h2 className="skill-name">{name}</h2>
            <p className="skill-status">{description}</p>
          </div>
        </div>
        <div className="skill-level">
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: percent + "%" }}></div>
          </div>
          {percent}%
        </div>
      </div>
      <AnimatePresence>{open && <InfoModal info={info} setOpen={setOpen} />}</AnimatePresence>
    </>
  );
}

export default Skill;
