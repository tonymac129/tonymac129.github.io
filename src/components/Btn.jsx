import { Link } from "react-router";

function Btn({ link, blank = false, text, primary = false }) {
  return (
    <Link to={link} className={primary ? "btn" : "btn action-btn"} target={blank ? "_blank" : ""}>
      {text}
    </Link>
  );
}

export default Btn;
