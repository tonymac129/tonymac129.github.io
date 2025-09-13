import { motion } from "framer-motion";
import { logo, cli, csharp, css, html, js, python, java, react, unity, minecraft, stem, basketballh } from "../assets/assets";
import "./Home.css";
import Btn from "../components/Btn";
import SectionImg from "../components/SectionImg";

function Home() {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }}>
      <title>Home | TonyMac129</title>
      <div className="content">
        <div className="home">
          <div className="home-content">
            <h1 className="home-title">Welcome to my corner of the internet!</h1>
            <p className="section-description">
              I am Tony Macaroni (that's not my last name lol), a 14 years old React front-end developer based in northern
              Virginia, USA. I'm a high school freshman studying STEM and computer science at{" "}
              <a href="https://tjhsst.fcps.edu/" target="_blank">
                TJHSST
              </a>
              . I'm also the founder and developer of{" "}
              <a href="https://mac-web.github.io" target="_blank">
                MacWeb
              </a>
              , an online platform for gaming and learning web development. You can find all sorts of interesting things I made
              here, along with my skillset, school projects, and almost everything else about me!
            </p>
            <div className="section-btns">
              <Btn link="/featured" text="Featured apps" primary={true} />
              <Btn link="/projects" text="Other projects" />
              <Btn link="/about" text="About me" />
            </div>
          </div>
          <div className="home-img">
            <img src={logo} />
            <p className="section-img-caption">ChatGPT, how many times do I have to tell you, I don't look that serious bro 🙄</p>
          </div>
        </div>
        <div className="sections">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="section"
          >
            <div className="section-imgs">
              <SectionImg src={html} title="HTML" />
              <SectionImg src={css} title="CSS" />
              <SectionImg src={js} title="JavaScript" />
              <SectionImg src={react} title="React" />
              <SectionImg src={cli} title="Command Line Interface" />
              <SectionImg src={python} title="Python" />
              <SectionImg src={java} title="Java" />
              <SectionImg src={csharp} title="C#" />
              <SectionImg src={unity} title="Unity" />
            </div>
            <div className="section-content">
              <h2 className="section-title">I spend most of my free time developing...</h2>
              <div className="section-description">
                I mainly work with the most popular library{" "}
                <a href="https://react.dev" target="_blank">
                  React
                </a>{" "}
                using HTML, CSS, and JavaScript (with the help of{" "}
                <a href="https://code.visualstudio.com/" target="_blank">
                  VS Code
                </a>{" "}
                and CLI) to develop front-end web apps and websites, and you can see all the projects I worked on since 2022 when
                I started displayed here on my personal website.{" "}
                <a href="https://mac-web.github.io" target="_blank">
                  MacWeb
                </a>{" "}
                is by far the most popular product I spent the most time on, with the game site{" "}
                <a href="https://mac-web.github.io/macvg/" target="_blank">
                  MacVG
                </a>{" "}
                earning me hundreds every month. I sometimes mess with{" "}
                <a href="https://micropython.org/" target="_blank">
                  MicroPython
                </a>{" "}
                for my{" "}
                <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">
                  Raspberry Pi Pico
                </a>
                , program robots with Java, and make random games in{" "}
                <a href="https://unity.com/" target="_blank">
                  Unity
                </a>{" "}
                using C#.
              </div>
              <div className="section-btns">
                <Btn link="/skills" text="Check out my skills" primary={true} />
                <Btn link="/projects" text="My projects" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="section"
          >
            <div className="section-content">
              <h2 className="section-title">...but I'm also enjoying life</h2>
              <div className="section-description">
                I enjoy watching animations such as Gravity Falls and Demon Slayer, franchises like Marvel and Star Wars, and
                popular sci-fi shows and movies. I'm also a{" "}
                <a href="https://supercell.com/en/games/brawlstars/" target="_blank">
                  Brawl Stars
                </a>{" "}
                and{" "}
                <a href="https://www.minecraft.net/" target="_blank">
                  Minecraft
                </a>{" "}
                addict, totaling hundreds of hours on the games. You can also find me wasting my life away on TikTok, YouTube, and
                Reddit, just like all of you. When I'm away from the screen, I'm probably eating pizza, earning service hours as a
                teacher assistant at my{" "}
                <a href="https://www.nvaecs.org/en/index.php" target="_blank">
                  Chinese school
                </a>
                , playing basketball, or hiking in the mountains.
              </div>
              <div className="section-btns">
                <Btn link="/about" text="More about me" primary={true} />
                <Btn link="/contact" text="Contact me" />
              </div>
            </div>
            <div className="section-imgs">
              <SectionImg src={minecraft} title="Minecraft" single={true} />
              <p className="section-img-caption">Be honest, who hasn't played the masterpiece known as Minecraft 🔥?</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="section"
          >
            <div className="section-imgs">
              <SectionImg src={stem} title="Science, technology, engineering, and mathematics" single={true} />
              <p className="section-img-caption">I go to a "smart" high school for students who love STEM 🧠</p>
            </div>
            <div className="section-content">
              <h2 className="section-title">Yes, I'm a nerd, but a cool one 🙃</h2>
              <div className="section-description">
                Sure, I'm already learning calculus, have a passion for STEM, had the highest GPA in my middle school, and I'm
                trying my hardest to get in MIT, but I'm not the tryhard you're probably picturing in your mind right now (or am
                I?). I procrastinate 24/7, often play basketball with my friends, hang out with them and play different games
                together, and travel to different places during summer.
              </div>
            </div>
            <div className="section-imgs">
              <SectionImg src={basketballh} title="Basketball" single={true} />
              <p className="section-img-caption">Maybe I'm a bandwagon Lakers fan, but they got LeBron 👑</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
