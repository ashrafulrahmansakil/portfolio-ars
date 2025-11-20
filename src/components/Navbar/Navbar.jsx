import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "../../data/data";
import { FaAlignCenter, FaX, } from "react-icons/fa6";

export default function Navbar() {
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <header>
      <div>
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 dark:text-white">
            {navLinks.map((link) => {
              const isActive = `#${link.path}` === hash;
              return (
                <li key={link.id} className="capitalize">
                  <HashLink
                    to={`#${link.path}`}
                    className={`px-2 py-1 transition duration-200 ${isActive
                      ? "text-cyan-400 dark:text-cyan-200 font-semibold"
                      : "hover:text-cyan-400"
                      }`}
                  >
                    {link.name}
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleSidebar}
          className=" z-[10000] md:hidden p-2 rounded text-slate-700 dark:text-white cursor-pointer"
        >
          {isOpen ? <FaAlignCenter size={28} /> : <FaAlignCenter size={28} />}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`z-[9999] fixed top-0 right-0  h-screen w-[15rem] dark:bg-slate-800 bg-cyan-800 text-white transform transition-transform duration-300 ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className=" justify-between items-center px-4 py-4 dark:border-slate-700 ">

          <button onClick={toggleSidebar}>
            <FaX size={24} className="text-slate-300 dark:text-white  cursor-pointer" />
          </button>

          <ul className="flex flex-col space-y-4  dark:text-white">
            {navLinks.map((link) => {
              const isActive = `#${link.path}` === hash;
              return (
                <li key={link.id} className="capitalize">
                  <HashLink
                    to={`#${link.path}`}
                    onClick={toggleSidebar}
                    className={`block px-2 py-1 rounded-md transition ${isActive
                      ? "text-cyan-400 dark:text-cyan-200 font-semibold"
                      : "hover:text-cyan-400"
                      }`}
                  >
                    {link.name}
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
