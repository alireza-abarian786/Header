import { useRoutes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import routers from "./Router";

export default function ReactRouter() {
  const routes = useRoutes(routers)
  return (
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          {routes}
        </main>
      </div>
  );
}
