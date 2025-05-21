import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menu , setMenu] = useState('none')
  const location = useLocation();
  const menuRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  useEffect(() => {
    const updateMenuDisplay = () => {
      if (window.innerWidth > 768) {
        setMenu('flex');
      } else {
        setMenu('none');
      }
    };

    updateMenuDisplay();

    window.addEventListener('resize', updateMenuDisplay);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu('none');
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', updateMenuDisplay);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handlerShowMenu = () => {
    setMenu('flex')    
  }

  const handlerHideMenu = () => {
    setMenu('none')
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-menu" ref={menuRef}>
          <svg onClick={handlerShowMenu} className="berger-menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
          
          <ul className={menu === 'flex' ? 'show' : ''}>
            <li onClick={handlerHideMenu}>
              <Link to="/" className={isActive("/")}>صفحه اصلی</Link>
            </li>
            <li onClick={handlerHideMenu}>
              <Link to="/about" className={isActive("/about")}>درباره ما</Link>
            </li>
            <li onClick={handlerHideMenu}>
              <Link to="/services" className={isActive("/services")}>خدمات</Link>
            </li>
            <li onClick={handlerHideMenu}>
              <Link to="/toturial" className={isActive("/toturial")}>آموزش</Link>
            </li>
            <li onClick={handlerHideMenu}>
              <Link to="/blog" className={isActive("/blog")}>وبلاگ</Link>
            </li>
            <li onClick={handlerHideMenu}>
              <Link to="/courses" className={isActive("/courses")}>دوره‌ها</Link>
            </li>
          </ul>
        </div>

        <div className="nav-brand">
          <h3>Learning</h3>
        </div>
        
      </div>
    </nav>
  );
} 