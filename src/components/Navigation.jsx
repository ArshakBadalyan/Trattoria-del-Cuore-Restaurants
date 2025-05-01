import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { menu, navigation } from "../utils/content";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <nav className="bg-white  dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-red-600 font-[Pacifico]">
              {navigation.companyName}
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {menu.menuItems.map((item, _) =>
              item.key === "reservations" ? (
                <a
                  href="#reservation"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={`#${item.key}`}
                  className="text-gray-700 dark:text-gray-200 hover:text-red-600 px-3 py-2 font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="hidden md:block">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none transition-colors duration-300"
            >
              {theme === "light" ? (
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-gray-800 dark:text-gray-100"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-gray-800 dark:text-gray-100"
                />
              )}
            </button>
          </div>
          <div className="md:hidden flex gap-5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full   focus:outline-none   transition-colors duration-300"
            >
              {theme === "light" ? (
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-gray-800 dark:text-gray-100"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-gray-800 dark:text-gray-100"
                />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-100 hover:text-red-600 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white dark:bg-black  shadow-lg ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menu.menuItems.map((item, _) => (
            <a
              href={`#${item.key}`}
              className={`${
                item.key === "reservations"
                  ? "block px-3 py-2 bg-red-600 text-white rounded-lg font-medium"
                  : "block px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-red-600 font-medium"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
