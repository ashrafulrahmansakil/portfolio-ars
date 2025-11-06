import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const { hash } = useLocation();
  const navLinks = [
    { id: 1, name: "home", path: "home" },
    { id: 2, name: "about", path: "about" },
    { id: 3, name: "projects", path: "projects" },
    { id: 4, name: "contact", path: "contact" },
  ];

  return (
    <nav className='hidden md:block' >
      <ul className='flex space-x-4 dark:text-white'>
        {navLinks.map((link) => {
          const isActive = `#${link.path}` === hash;
          return (
            <li key={link.id} className="capitalize">
              <HashLink
                to={`#${link.path}`}
                className={`px-2 py-1 transition ${isActive ? "text-cyan-400 dark:text-cyan-200" : " "
                  }`}
              >
                {link.name}
              </HashLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}