import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h3>Learning</h3>
        </div>
        
        <div className="nav-menu">
          <ul>
            <li>
              <Link to="/" className="nav-link">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">درباره ما</Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">خدمات</Link>
            </li>
            <li>
              <Link to="/toturial" className="nav-link">آموزش</Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link">وبلاگ</Link>
            </li>
            <li>
              <Link to="/courses" className="nav-link">دوره‌ها</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 