import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap border-b-2 border-accent shadow-lg p-6 bg-background">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link
            to="home"
            className="font-mono font-semibold text-3xl tracking-tight"
            onClick={() => handleClickLink("home")}
          >
            I'm Ale
          </Link>
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
            <Link
              to="/about"
              className={`p-2 text-lg block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-white ${
                activeLink === "about" ? "text-black bg-accent" : "text-primary"
              }`}
              onClick={() => handleClickLink("about")}
            >
              About me
            </Link>
            <Link
              to="/projects"
              className={`p-2 text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-white ${
                activeLink === "projects"
                  ? "text-black bg-accent"
                  : "text-primary"
              }`}
              onClick={() => handleClickLink("projects")}
            >
              Projects
            </Link>
            <Link
              to="/technologies"
              className={`p-2 text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-white ${
                activeLink === "technologies"
                  ? "text-black bg-accent"
                  : "text-primary"
              }`}
              onClick={() => handleClickLink("technologies")}
            >
              Technologies
            </Link>
            <Link
              to="/contact"
              className={`p-2 text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-white ${
                activeLink === "contact"
                  ? "text-black bg-accent"
                  : "text-primary"
              }`}
              onClick={() => handleClickLink("contact")}
            >
              Contact me
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
