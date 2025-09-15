import { motion } from "framer-motion";
import { logo } from "../assets/assets";
import Hero from "../components/Hero";
import Status from "../components/Status";
import Favorite from "../components/Favorite";
import "./About.css";

function About() {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }}>
      <title>About | TonyMac129</title>
      <Hero
        title="About Me"
        description="Here's some stuff about me, my contact info, and other interesting things if you want to reach out or learn more about me. You can also find this portfolio's information here."
      />
      <div className="content">
        <div className="about-section">
          <div className="about-side">
            <div className="home-img">
              <img src={logo} className="about-img" />
              <p className="section-img-caption">Can only put AI pfp because there's literally no photo of me</p>
            </div>
            <div className="statuses">
              <Status
                action="Developing"
                name="TonyMac129"
                link="https://tonymac129.github.io"
                img="https://avatars.githubusercontent.com/u/141281444?v=4"
                tag="It's this website btw"
              />
              <Status
                action="Watching"
                name="Attack on Titan"
                link="https://www.imdb.com/title/tt2560140/"
                img="https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                tag="One of the highest rated anime"
              />
              <Status
                action="Reading"
                name="Harry Potter and the Sorcerer's Stone"
                link="https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone"
                img="https://m.media-amazon.com/images/I/81DI+BAN2SL._UF1000,1000_QL80_.jpg"
              />
              <Status
                action="Reading"
                name="Fahrenheit 451"
                tag="School assignment 😭"
                link="https://en.wikipedia.org/wiki/Fahrenheit_451"
                img="https://m.media-amazon.com/images/I/61sKsbPb5GL._UF1000,1000_QL80_.jpg"
              />
            </div>
          </div>
          <div className="about-content">
            <div className="about-paragraph">
              <h2 className="section-title">Brief Intro</h2>
              <p className="section-description">
                👋 I'm Tony, a 14 years old React front-end developer based in northern Virginia, USA. I'm a high school freshman
                studying STEM and computer science at{" "}
                <a href="https://tjhsst.fcps.edu/" target="_blank">
                  TJHSST
                </a>
                . I'm also the founder and developer of{" "}
                <a href="https://mac-web.github.io" target="_blank">
                  MacWeb
                </a>
                , an online platform for gaming and learning web development. As of computer programming, I know several
                technologies and languages such as React, HTML, CSS, JavaScript, Java, C#, and Python. I'm currently learning
                back-end web development technologies like MongoDB, Express, and Node (the MERN stack).
              </p>
            </div>
            <div className="about-paragraph">
              <h2 className="section-title">My Story</h2>
              <p className="section-description">
                I was born in Taipei, Taiwan in 2010 and got into an advanced program in 2019 and learned a lot of cool stuff and
                STEM there. In 2022, when I was 11, we moved from Taipei to Virginia, USA and lived here ever since. It was that
                summer when I started really get into programming, especially web development. I started learning JS in early 2023
                and switched to React in March 2025. Everything I know about web development is self taught through YouTube
                tutorials, online resources, ChatGPT, and books, so it was a pretty tough but rewarding journey. In April 2025, I
                got accepted to TJHSST, one of the best public high schools in the nation that focuses on STEM and it's always
                been a dream of mine to go here. I hope to keep expanding my skills beyond web dev in the future and learn more!
              </p>
            </div>
            <div className="about-paragraph">
              <h2 className="section-title">Contact?</h2>
              <p className="section-description">
                I'm not really sure why someone would want to contact me (I'm a student who has like 2 hours of homework everyday
                😭), but if you really want to do that, you can see all my socials below in the footer. I would prefer email,
                Discord, and GitHub as I check these most often and I barely touch my other accounts. If you just wanna give a
                suggestion to this site, submit an issue in the GitHub repository and I'll get to you ASAP!
              </p>
            </div>
          </div>
        </div>
        <h2 className="about-title">Things I Like</h2>
        <div className="favorite-cards">
          <Favorite
            name="Gravity Falls"
            description={'"See you next summer" 💔'}
            img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9gELppedrzSNbN96GhQc5jfcooUOwJnJUI2wHmyrwp6aY3Bf8VvLbWBWfOlEavclheYKH9g"
            link="https://www.imdb.com/title/tt1865718/"
          />
          <Favorite
            name="Demon Slayer"
            description={'"I can\'t do it Tanjiro" 💔'}
            img="https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            link="https://www.imdb.com/title/tt9335498/"
          />
          <Favorite
            name="Attack on Titan"
            description={'Mikasa every second: "Eren 🥺"'}
            img="https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            link="https://www.imdb.com/title/tt2560140/"
          />
          <Favorite
            name="Frieren"
            description={'"Aura, kill yourself" (lowk smash tho 😏)'}
            img="https://m.media-amazon.com/images/M/MV5BZTI4ZGMxN2UtODlkYS00MTBjLWE1YzctYzc3NDViMGI0ZmJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            link="https://www.imdb.com/title/tt22248376/"
          />
          <Favorite
            name="Lord of the Rings Books"
            description={'"I can\'t carry it for you, but I can carry you"'}
            img="https://images.booksense.com/images/238/380/9780358380238.jpg"
            link="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
          />
          <Favorite
            name="Lord of the Rings Movies"
            description={'"Is it secret??? Is it safe???"'}
            img="https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg"
            link="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)"
          />
          <Favorite
            name="Percy Jackson"
            description={'"You drool when you sleep"'}
            img="https://m.media-amazon.com/images/I/91WN6a6F3RL._UF1000,1000_QL80_.jpg"
            link="https://en.wikipedia.org/wiki/Percy_Jackson_%26_the_Olympians"
          />
          <Favorite
            name="Harry Potter"
            description={'"There is no safer place than Hogwarts ☝️🤓"'}
                img="https://m.media-amazon.com/images/I/81DI+BAN2SL._UF1000,1000_QL80_.jpg"
                link="https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone"
          />
          <Favorite
            name="The Mandalorian"
            description={'"This is the way"'}
            img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR24TFO9-KR5k-zBb43Fv9IbJ3_bxI34viMbCXJUWAH0392MR-C-isGhYlAp5QoMmbhORWVGg"
            link="https://www.imdb.com/title/tt8111088/"
          />
          <Favorite
            name="MCU"
            description={'"I  understood that reference ☝️🤓"'}
            img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSiy9vZsPzLtmD7BUSRnwUrEEM3b-wRzgWEndERcCGBTZp-chAmggbfyF_Q0-hHWgOVhjE66w"
            link="https://www.imdb.com/title/tt4154796/"
          />
          <Favorite
            name="Stranger Things"
            description={"Can't think of a quote lol"}
            img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEPoq9abrTDIZOYRup-2DDHa_qGT1oqr0e1s3Ls3SjXbrlYDc1Nm6pPtx3GN23_UXkbZ9sHw"
            link="https://www.imdb.com/title/tt4574334/"
          />
          <Favorite
            name="Squid Game"
            description={'"Humans are..." *dies* *awkward silence*'}
            img="https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            link="https://www.imdb.com/title/tt10919420/"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
