import { motion } from "framer-motion";
import { Link } from "react-router";
import { close, lazy } from "../assets/assets";

function InfoModal({ info, setOpen, fromBlog }) {
  return (
    <motion.div
      className="modal-bg"
      onClick={(e) => {
        if (e.target == e.currentTarget) setOpen(false);
      }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="info-modal"
      >
        <motion.img
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 1.1, rotate: 5 }}
          src={close}
          className="modal-btn"
          onClick={() => setOpen(false)}
          title="Close"
        />
        {info ? (
          <>
            {!fromBlog && (
              <Link to="/blog" className="blog-link">
                Go to blog page
              </Link>
            )}
            <h2 className="modal-title">{info.title}</h2>
            <div className="modal-info">
              Updated &nbsp;{info.date} &nbsp;&nbsp; • &nbsp;&nbsp; Published &nbsp;{info.release}
            </div>
            <div className="modal-text">
              {info.text.split("<BR>").map((paragraph) => {
                return <p className="modal-paragraph">{paragraph}</p>;
              })}
            </div>
          </>
        ) : (
          <div className="modal-error">
            <h2 className="modal-title">Page not found!</h2>
            <img src={lazy} />
            <div className="modal-paragraph">
              I'm probably doing random stuff and being lazy again and will not write this essay thing for another 3+ months.
              Submit an issue&nbsp;
              <a href="https://github.com/tonymac129/tonymac129.github.io/issues" target="_blank">
                here
              </a>
              &nbsp;to remind me! (I'm probably gonna ignore anyway 🙃)
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default InfoModal;
