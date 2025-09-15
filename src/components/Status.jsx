import { motion } from "framer-motion";

function Status({ action, name, link, img = null, tag = null }) {
  return (
    <motion.a
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 1, y: -3 }}
      transition={{ duration: 0.5, type: "spring" }}
      href={link}
      target="_blank"
      className="status"
    >
      <div className="status-content">
        <h3 className="status-title">Currently {action}:</h3>
        <div className="status-name">{name}</div>
        {tag && <div className="status-tag">{tag}</div>}
      </div>
      {img && <img src={img} className="status-img" />}
    </motion.a>
  );
}

export default Status;
