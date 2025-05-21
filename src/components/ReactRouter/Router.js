import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Toturial from "../Pages/Toturial";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";

const routers = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/toturial", element: <Toturial /> },
  { path: "/blog", element: <Blog /> },
  { path: "/courses", element: <Courses /> },
];

export default routers;
