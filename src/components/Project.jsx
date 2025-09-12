import { cli, csharp, css, html, js, python, java, react, unity } from "../assets/assets";
import { back, next } from "../assets/assets";
import SectionImg from "./SectionImg";

function Project({ project, setProjectID, setNext, length }) {
  const icons = { cli, csharp, css, html, js, java, python, react, unity };

  function handleNext() {
    setProjectID((prev) => (prev == 0 ? length - 1 : prev - 1));
    setNext(true);
  }

  function handleBack() {
    setProjectID((prev) => (prev + 1) % length);
    setNext(false);
  }

  return (
    <div className="project">
      <h2 className="project-name">{project.name}</h2>
      <div className="project-img">
        {project.skills.map((skill) => {
          return <SectionImg src={icons[skill.toLowerCase()]} title={skill} />;
        })}
      </div>
      <div className="project-info">
        {project.tags.map((tag) => {
          return <div className="project-tag">{tag}</div>;
        })}
        <a href={project.link} target="_blank">
          Full demo
        </a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-content">
        <img src={back} className="project-btn" onClick={handleNext} />
        <iframe src={project.link} className="project-frame"></iframe>
        <img src={next} className="project-btn" onClick={handleBack} />
      </div>
    </div>
  );
}

export default Project;
