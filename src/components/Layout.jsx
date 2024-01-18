import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, Link, useLocation } from "react-router-dom";
import icon from "../img/icon.webp";
import "tailwindcss/tailwind.css";

function Layout() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const location = useLocation();

  return (
    <div className="lg:px-[26%] lg:my-12 md:px-[16%] my-12 px-[8%]  place-content-center">
      <nav className="flex w-full">
        <div className="w-1/2">
          <a href="/">
            <img src={icon} alt="LOGO" className="w-7" />
          </a>
        </div>

        <div className="hidden sm:flex w-1/2 content-center justify-between dark:text-white text-midnight text-sm">
          <Link
            to="/about"
            className={`${
              location.pathname === "/about"
                ? "bg-white dark:bg-hover"
                : "text-center"
            } p-3 hover:bg-white dark:hover:bg-hover hover:cursor-pointer rounded-xl mx-0.5 `}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`${
              location.pathname.includes("/projects")
                ? "bg-white dark:bg-hover"
                : "text-center"
            } p-3 hover:bg-white dark:hover:bg-hover hover:cursor-pointer rounded-xl mx-0.5 `}
          >
            Projects
          </Link>
          <Link
            to="/certificates"
            className={`${
              location.pathname === "/certificates"
                ? "bg-white dark:bg-hover"
                : "text-center"
            } p-3 hover:bg-white dark:hover:bg-hover hover:cursor-pointer rounded-xl mx-0.5 `}
          >
            Certificates
          </Link>
        </div>
        <div
          className="sm:hidden flex cursor-pointer w-2/3 items-end mx-auto justify-end"
          onClick={toggleMenu}
        >
          <motion.div
            whileTap={{ scale: 1.5 }}
            animate={{ rotate: menuActive ? 90 : 0 }}
            className="self-end dark:text-whiter transition duration-300 text-lg"
          >
            &#9776;
          </motion.div>
        </div>
      </nav>

      {menuActive && (
        <div className=" bg-white w-full grid flex-wrap ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-[40%] sm:hidden w-2/5 bg-white dark:bg-black justify-self-end rounded-xl p-2 flex-wrap flex z-10 "
          >
            <Link
              to="/about"
              className="w-full text-center p-4 dark:text-whiter"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="w-full text-center p-4 dark:text-whiter"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/certificates"
              className="w-full text-center p-4 dark:text-whiter"
              onClick={toggleMenu}
            >
              Certificates
            </Link>
          </motion.div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Layout;
