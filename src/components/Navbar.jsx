import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="text-blue-500 font-bold text-xl transform transition-transform duration-300 hover:scale-110 hover:text-blue-700"
      >
        HAINA
      </NavLink>

      <nav className="flex text-lg gap-7 font-semibold">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600"
              : "text-black transform transition-transform duration-300 hover:scale-125"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600"
              : "text-black transition-transform duration-300 hover:scale-125"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
