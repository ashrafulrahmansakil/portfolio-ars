import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Button from "../Button/Button";
import { ThemeContext } from '../../context/ThemeContenxt';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button
      className="p-2 rounded-md border border-transparent hover:border-slate-600 cursor-pointer dark:text-white text-black transition-all duration-300"
      onClick={toggleTheme}
      name={theme ? <FiSun size={18} /> : <FiMoon size={18} />}
    />
  );
};

export default ThemeToggle;
