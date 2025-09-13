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
import { Link } from "react-router";

function Skill({ name, percent, description }) {
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

  return (
    <Link className="skill-card">
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
    </Link>
  );
}

export default Skill;
