import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h3>Learning</h3>
        </div>
        
        <div className="nav-menu">
          <ul>
            <li>
              <Link to="/" className={isActive("/")}>صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about")}>درباره ما</Link>
            </li>
            <li>
              <Link to="/services" className={isActive("/services")}>خدمات</Link>
            </li>
            <li>
              <Link to="/toturial" className={isActive("/toturial")}>آموزش</Link>
            </li>
            <li>
              <Link to="/blog" className={isActive("/blog")}>وبلاگ</Link>
            </li>
            <li>
              <Link to="/courses" className={isActive("/courses")}>دوره‌ها</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 