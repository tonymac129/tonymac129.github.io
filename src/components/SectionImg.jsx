import { useState } from "react";

function SectionImg({ src, title, single = false, home = true }) {
  const [hovered, setHovered] = useState(false);
  let imgClass = "";
  if (single) {
    imgClass += "single-img";
  }
  if (!home) {
    imgClass += "footer-img";
  }

  return (
    <div className="section-img">
      <div className={hovered ? "hovered img-hover" : "img-hover"}>{title}</div>
      <img src={src} className={imgClass} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
    </div>
  );
}

export default SectionImg;
