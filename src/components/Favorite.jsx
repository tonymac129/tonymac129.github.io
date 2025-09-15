import { motion } from "framer-motion";

function Favorite({ name, link, img = null, description }) {
  return (
    <motion.a
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 1, y: -3 }}
      transition={{ duration: 0.5, type: "spring" }}
      href={link}
      target="_blank"
      className="favorite"
    >
      {img && <img src={img} className="status-img" />}
      <div className="status-content">
        <h3 className="status-title">{name}</h3>
        <div className="status-tag">{description}</div>
      </div>
    </motion.a>
  );
}

export default Favorite;
