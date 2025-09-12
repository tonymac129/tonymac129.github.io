import { email, discord, github, reddit, tiktok, x, youtube, instagram, facebook } from "../assets/assets";
import SectionImg from "./SectionImg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>Made with React and too many late night coding sessions</div>
        <div>
          &copy; {new Date().getFullYear() + "  "}
          <a href="https://github.com/tonymac129" target="_blank">
            TonyMac129
          </a>
        </div>
      </div>
      <div className="footer-icons">
        <a href="mailto:tonyforself@gmail.com">
          <SectionImg src={email} title="Email me" home={false} />
        </a>
        <a href="http://discord.com/users/1068681362590146611" target="_blank">
          <SectionImg src={discord} title="Direct message" home={false} />
        </a>
        <a href="https://github.com/tonymac129" target="_blank">
          <SectionImg src={github} title="GitHub" home={false} />
        </a>
        <a href="https://reddit.com/u/tonymac129" target="_blank">
          <SectionImg src={reddit} title="Reddit" home={false} />
        </a>
        <a href="https://tiktok.com/@tonymac129" target="_blank">
          <SectionImg src={tiktok} title="TikTok" home={false} />
        </a>
        <a href="https://youtube.com/@tonymac129" target="_blank">
          <SectionImg src={youtube} title="YouTube" home={false} />
        </a>
        <a href="https://www.instagram.com/tonymac129/" target="_blank">
          <SectionImg src={instagram} title="Instagram" home={false} />
        </a>
        <a href="https://x.com/tonymac129" target="_blank">
          <SectionImg src={x} title="X (Twitter)" home={false} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100090236006126" target="_blank">
          <SectionImg src={facebook} title="Facebook" home={false} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
