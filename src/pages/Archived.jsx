import { motion } from "framer-motion";
import Hero from "../components/Hero";
import "./Archived.css";

function Archived() {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }}>
      <title>Archived Projects | TonyMac129</title>
      <Hero
        title="Archived Projects"
        description="Here is a list of my smaller or incomplete web projects used for learning, as well as my non-coding projects."
      />
      <div className="content">
        <h2 className="archive-section-title">Webpages</h2>
        <ul className="list">
          <li>
            <a href="/archived/announcement/index.html" target="_blank" className="list-link">
              Announcement
            </a>
          </li>
          <li>
            <a href="/archived/css-grid/index.html" target="_blank" className="list-link">
              CSS Grid
            </a>
          </li>
          <li>
            <a href="/archived/image-transition/index.html" target="_blank" className="list-link">
              Image Transition
            </a>
          </li>
          <li>
            <a href="/archived/imdb/index.html" target="_blank" className="list-link">
              IMDb Redesign
            </a>
          </li>
          <li>
            <a href="/archived/popup/index.html" target="_blank" className="list-link">
              Popup
            </a>
          </li>
          <li>
            <a href="/archived/tilt-design/index.html" target="_blank" className="list-link">
              Vanilla Tilt
            </a>
          </li>
          <li>
            <a href="/archived/tonymac129/index.html" target="_blank" className="list-link">
              MacVG Prototype
            </a>
          </li>
        </ul>
        <h2 className="archive-section-title">School Projects</h2>
        <ul className="list">
          <li>
            <a href="/archived/cell-analogy/index.html" target="_blank" className="list-link">
              Cell Analogy
            </a>
          </li>
          <li>
            <a href="/archived/squirrel.pdf" target="_blank" className="list-link">
              The Heroic Squirrel
            </a>
          </li>
          <li>
            <a href="/archived/Civil War Museum Exhibit.pdf" target="_blank" className="list-link">
              Civil War Museum
            </a>
          </li>
          <li>
            <a href="/archived/Civil War Amendments.pdf" target="_blank" className="list-link">
              Civil War Amendments
            </a>
          </li>
          <li>
            <a href="/archived/Fort Sumter Newspaper.pdf" target="_blank" className="list-link">
              Fort Sumter Newspaper
            </a>
          </li>
          <li>
            <a href="/archived/Which Balloon Car Runs Farther.pdf" target="_blank" className="list-link">
              Balloon Car Project
            </a>
          </li>
          <li>
            <a href="/archived/Project Green City.pdf" target="_blank" className="list-link">
              Project Green City
            </a>
          </li>
          <li>
            <a href="https://scratch.mit.edu/projects/747432575/" target="_blank" className="list-link">
              Galaxy Builder
            </a>
          </li>
          <li>
            <a href="/archived/西餐禮儀.pdf" target="_blank" className="list-link">
              西餐禮儀
            </a>
          </li>
          <li>
            <a href="/archived/摩擦力.pdf" target="_blank" className="list-link">
              摩擦力
            </a>
          </li>
          <li>
            <a href="/archived/連續整數.pdf" target="_blank" className="list-link">
              連續整數
            </a>
          </li>
          <li>
            <a href="/archived/乾坤扭轉-移位遊戲.pdf" target="_blank" className="list-link">
              移位遊戲
            </a>
          </li>
          <li>
            <a href="/archived/愛吃食物.pdf" target="_blank" className="list-link">
              愛吃食物
            </a>
          </li>
          <li>
            <a href="/archived/路面積水.pdf" target="_blank" className="list-link">
              路面積水
            </a>
          </li>
          <li>
            <a href="/archived/寶特瓶扇葉.pdf" target="_blank" className="list-link">
              寶特瓶扇葉
            </a>
          </li>
          <li>
            <a href="/archived/水熊蟲.pdf" target="_blank" className="list-link">
              水熊蟲報告
            </a>
          </li>
        </ul>
        <h2 className="archive-section-title">Other</h2>
        <ul className="list">
          <li>
            <a href="https://www.youtube.com/@AmericanCube" target="_blank" className="list-link">
              YouTube Channel
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Archived;
