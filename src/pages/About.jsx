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
        <h2 className="about-title">Things I Use</h2>
        <div className="favorite-cards use-cards">
          <Favorite
            name="Galaxy S25"
            description="My first ever phone! (iPhones suck)"
            img="https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-s25-icyblue?$device-lg$"
            link="https://www.verizon.com/smartphones/samsung-galaxy-s25/"
          />
          <Favorite
            name="HP Laptop"
            description="What I use for code, school, and fun."
            img="https://m.media-amazon.com/images/I/71oi5Pn8f0L.jpg"
            link="https://www.amazon.com/HP-Laptop-Windows-Natural-Silver/dp/B08Y5KKXFB"
          />
          <Favorite
            name="HP Pavilion Chromebook"
            description="$100 school laptop 🥀"
            img="https://techtoschool.com/cdn/shop/files/1069604087-2_6639c28a-99b5-42df-a4bd-7f9b5ebb5d0a_1200x1200.jpg?v=1684778737"
            link="https://www.google.com/chromebook/"
          />
          <Favorite
            name="Visual Studio Code"
            description="The best web dev code editor"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            link="https://code.visualstudio.com"
          />
          <Favorite
            name="Discord"
            description="IDK why I use it."
            img="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source"
            link="https://discord.com"
          />
          <Favorite
            name="Microsoft Edge"
            description="To save resources but lowkey a good browser"
            img="https://avatars.githubusercontent.com/u/11354582?s=200&v=4"
            link="https://www.microsoft.com/en-us/edge/?ep=0&form=MA1403&es=222&cs=3937985797"
          />
          <Favorite
            name="ChatGPT"
            description="Too lazy to Google stuff and has coding skill issues"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/250px-ChatGPT-Logo.svg.png"
            link="https://chatgpt.com"
          />
          <Favorite
            name="GitHub Pages"
            description="Can't afford real web hosting apps"
            img="https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj"
            link="https://pages.github.com"
          />
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
        <h2 className="about-title">Other Things I Like</h2>
        <div className="favorite-cards">
          <Favorite
            name="Pizza"
            description={'The most popular food in the world'}
            img="https://media.istockphoto.com/id/901501348/vector/slice-of-melted-cheese-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=0cIsVfLHiabGD1NGDZEfE1hIBmD5DQuzNuLK8Owvyo8="
          />
          <Favorite
            name="Beef Noodles"
            description={'Peak Asian food (especially the spicy ones)'}
            img="https://thewoksoflife.com/wp-content/uploads/2016/02/beef-noodle-soup-7-1.jpg"
          />
          <Favorite
            name="Oreo"
            description={'Too good'}
            img="https://m.media-amazon.com/images/I/81d3XikUx+L._UF350,350_QL80_.jpg"
          />
          <Favorite
            name="Takis"
            description={'Best TV snack'}
            img="https://ih1.redbubble.net/image.4377687259.0952/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
          />
          <Favorite
            name="Doritos"
            description={'Second best TV snack'}
            img="https://ih1.redbubble.net/image.285467560.8952/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
          />
          <Favorite
            name="Music"
            description={'I listen to... a lot of stuff, pop, rap, rock, and more'}
            img="https://static.vecteezy.com/system/resources/previews/006/057/992/non_2x/spotify-logo-on-transparent-background-free-vector.jpg"
          />
          <Favorite
            name="Brawl Stars"
            description={'Clash is NOT better bro ⭐🔛🔝 (61k trophies)'}
            img="https://i.scdn.co/image/ab6761610000e5ebf7b952107c126c561c52171e"
          />
          <Favorite
            name="Minecraft"
            description={'I get dizzy playing this but I still do 💀'}
            img="https://yt3.googleusercontent.com/scvGT8SucZvs5yIkBBFQ0s0IQS1kPiiJgtYGUCTtRpIfSq6laBJ-5bPieuzrHuyVWIy0XxN4Ww=s900-c-k-c0x00ffffff-no-rj"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
