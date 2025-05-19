import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Toturial from "../Pages/Toturial";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";

export default function ReactRouter() {
  return (
    <HashRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/toturial" element={<Toturial />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
