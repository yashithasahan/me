"use client";
import Link from "next/link";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

import { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="p-2 flex justify-between items-center bg-black ">
      <div className="max-w-2k w-full mx-auto flex items-center justify-between  text-white dark:text-white ">
        <div className="font-bold">
          <span className="">@YashithaSahan</span>
          <span className="text-orange-500">.</span>
        </div>
        <div className="flex space-x-4 items-center">
          <nav className="hidden md:flex space-x-8 ">
            <Link
              href="/"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              Me
            </Link>
            <Link
              href="services"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              Services
            </Link>
            <Link
              href="projects"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              Projects
            </Link>
            <Link
              href="contact"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              Contact
            </Link>
          </nav>
          <button
            onClick={toggleDarkMode}
            className=" text-white dark:text-orange-500  "
          >
            <div className="w-5 h-5 relative mt-1">
              <div
                className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
                  darkMode ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                {/* Moon icon */}
                <LuMoonStar />
              </div>
              <div
                className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
                  darkMode ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
              >
                {/* Sun icon */}
                <MdOutlineWbSunny />
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
