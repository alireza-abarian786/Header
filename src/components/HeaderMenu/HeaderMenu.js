import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Toturial from "../Pages/Toturial";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";

export default function HeaderMenu() {
  return (
    <>
      <div className="header-top">
        <div className="top-logo">
          <span>
            <svg
              className="icon-bar d-lg-none d-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <h3 className="logo">Learning</h3>
        </div>

        <div className="top-menu">
          <ul>
            <span>
              <svg
                className="icon-close d-lg-none d-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <li>
              <Link to="/" className="active">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/about" className="page">درباره ما</Link>
            </li>
            <li>
              <Link to="/services" className="page">خدمات</Link>
            </li>
            <li>
              <Link to="/toturial" className="page">آموزش</Link>
            </li>
            <li>
              <Link to="/blog" className="page">وبلاگ ها</Link>
            </li>
            <li>
              <Link to="/courses" className="page">دوره ها</Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/toturial" element={<Toturial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}
