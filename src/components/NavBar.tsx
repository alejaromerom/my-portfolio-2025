import { useState } from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap border-b-2 border-accent shadow-lg p-6 bg-background">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink
            to="home"
            className="font-mono font-semibold text-3xl tracking-tight"
          >
            I'm Ale
          </NavLink>
        </div>
        <div className="block lg:hidden">
          <button
            id="boton"
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex lg:gap-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-accent" : ""
                } p-2 text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-white`
              }
            >
              About me
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-accent" : ""
                } p-2 text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-white`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-accent" : ""
                } p-2 text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-white`
              }
            >
              Technologies
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-accent" : ""
                } p-2 text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-white`
              }
            >
              Contact me
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
