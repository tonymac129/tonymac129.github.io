import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Archived from "./pages/Archived";
import Featured from "./pages/Featured";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/archived" element={<Archived />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
