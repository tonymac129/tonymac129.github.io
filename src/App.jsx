import { HashRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Archived from "./pages/Archived";
import Featured from "./pages/Featured";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Redirect from "./components/Redirect";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import "./index.css";

function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/archived" element={<Archived />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path=":any" element={<Redirect />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
