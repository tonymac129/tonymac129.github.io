import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Btn from "../components/Btn";
import SectionImg from "../components/SectionImg";
import { html, css, js, react, csharp, unity } from "../assets/assets";

function Featured() {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }}>
      <title>Featured | TonyMac129</title>
      <Hero
        title="Featured Projects"
        description="Here are the best large scale web development projects that I've created and put a lot of effort into. I'm still maintaining and constantly updating some of these, so feel free to check out these featured coding projects!"
      />
      <div className="content">
        <div className="sections">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="section"
          >
            <div className="section-imgs">
              <SectionImg src="https://mac-web.github.io/logo.png" title="MacWeb" single={true} />
              <p className="section-img-caption">The MacWeb logo is the shape of the connected letters M and W.</p>
            </div>
            <div className="section-content">
              <h2 className="section-title">MacWeb</h2>
              <div className="featured-section-imgs">
                <SectionImg src={react} title="React" />
              </div>
              <div className="section-description">
                MacWeb is an online platform I created to make digital life a bit easier and more enjoyable. It features{" "}
                <a href="https://mac-web.github.io/macvg/" target="_blank">
                  MacVG
                </a>
                , an online gaming hub focused on entertainment, and{" "}
                <a href="https://mac-web.github.io/maclearn/" target="_blank">
                  MacLearn
                </a>
                , a platform used for learning web development. MacWeb also has other smaller apps like{" "}
                <a href="https://mac-web.github.io/macideas/" target="_blank">
                  MacIdeas
                </a>{" "}
                and{" "}
                <a href="https://mac-web.github.io/mactools/" target="_blank">
                  MacTools
                </a>{" "}
                for productivity and utilities, as well as the information hub{" "}
                <a href="https://mac-web.github.io/macblog/" target="_blank">
                  MacBlog
                </a>{" "}
                for updates, news, and info about MacWeb. I've been working on MacWeb's first app, the web dev learning platform
                MacLearn, since January 2023, and MacVG, the online gaming platform, since June 2023. I officially created and
                rebranded MacWeb as a collection of web apps and tools in October 2023 and its popularity has skyrocketed ever
                since. I started earning hundreds monthly from MacWeb in December 2024 thanks to ads, and I transitioned the
                entire platform to React in July 2025 (I basically remade the entire website and it wasn't easy). This is the
                project that I've spent the most time working on, so hopefully you'll enjoy what I created.
              </div>
              <div className="section-btns">
                <Btn link="https://mac-web.github.io" blank={true} text="Sounds interesting" primary={true} />
                <Btn link="https://mac-web.github.io/macblog/#/apps/macweb/" blank={true} text="Read more" />
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
              <h2 className="section-title">Lightning</h2>
              <div className="featured-section-imgs">
                <SectionImg src={react} title="React" />
              </div>
              <div className="section-description">
                Since I first created MacWeb, I imagined an entire ecosystem of a bunch of different apps that could all integrate
                together (lol how naive I thought I could create all that myself) and every app can be called to do a certain task
                with a universal command bar. I soon realized there's no way to achieve this level of scale and the idea just
                became a dream. Until I got good with React and wanted to replace my old personal dashboard made with vanilla JS
                for the third time. I thought, why not make an extremely customizable dashboard with a ton of features and
                commands that act as shrotcuts to the web? Shortly after starting it, I discovered the event{" "}
                <a href="https://summer.hackclub.com" target="_blank">
                  Summer of Making
                </a>{" "}
                hosted by the absolutely amazing organization{" "}
                <a href="https://hackclub.com" target="_blank">
                  Hack Club
                </a>{" "}
                that rewards teens with free prizes/tech/merch for coding and making cool stuff. This gave me a ton of motivation
                and I developed a lot of features and stacked 9 hours on the project in just a week. Lightning is still being
                developed and I hope to make more features in the future!
              </div>
              <div className="section-btns">
                <Btn link="https://tonymac129.github.io/lightning/" blank={true} text="Mini OS?" primary={true} />
              </div>
            </div>
            <div className="section-imgs">
              <SectionImg src="https://tonymac129.github.io/lightning/logo.png" title="Lightning" single={true} />
              <p className="section-img-caption">I've had this idea for a long time but never coded it.</p>
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
              <SectionImg src="https://tonymac129.github.io/infinote/favicon.png" title="InfiNote" single={true} />
              <p className="section-img-caption">I really like the gradient of green and blue in the logo.</p>
            </div>
            <div className="section-content">
              <h2 className="section-title">InfiNote</h2>
              <div className="featured-section-imgs">
                <SectionImg src={react} title="React" />
              </div>
              <div className="section-description">
                In April 2025, as I started learning more advanced stuff like calculus and trigonometry I find it hard to remember
                and keep track of all the concepts, equations, and theorems you can use to solve certain problems in addition to
                building and remembering the intuition for how these concepts work. There's just too much to remember and I often
                find myself looking up the same thing over and over again. So I thought, why not create a simple digital notebook
                that allows me to keep track of all the things I've learned? This can definitely improve my math skills while also
                being a fun little coding exercise that's actually useful too. And that's how InfiNote was born. You can create
                your own topics, organize notes, edit them with different formatting tools, and do so much more!
              </div>
              <div className="section-btns">
                <Btn link="https://tonymac129.github.io/infinote/" blank={true} text="Go learn math" primary={true} />
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
              <h2 className="section-title">Lunar Lions</h2>
              <div className="featured-section-imgs">
                <SectionImg src={csharp} title="C#" />
                <SectionImg src={unity} title="Unity" />
              </div>
              <div className="section-description">
                Lunar Lions was my middle school's team name for the{" "}
                <a
                  href="https://www.nasa.gov/learning-resources/app-development-challenge/adc-handbook-and-coding-componets-2025/"
                  target="_blank"
                >
                  2024 NASA App Development Challenge
                </a>
                . Me and my teammates used the Unity 3D engine to make a real-time simulation/visualization app of the Artemis II
                rocket based on NASA's provided data. This was my first time using C# and Unity.
              </div>
              <div className="section-btns">
                <Btn link="https://thelunarlions.github.io" blank={true} text="Check it out" primary={true} />
              </div>
            </div>
            <div className="section-imgs">
              <SectionImg src="https://thelunarlions.github.io/favicon.png" title="Lunar Lions" single={true} />
              <p className="section-img-caption">
                The logo has a moon rocket with a lion paw on it, perfectly incorporating the project's elements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Featured;
