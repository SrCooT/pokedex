import { useContext, useState } from "react";
import { ThemeContext } from "../themesPages/themePage";
import sol from "../imagen/sol.png";
import lua from "../imagen/lua.png";
import "./theme-toggler-buton.css";

const ThemeTogglerButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [DarkTheme, setDarkTheme] = useState(theme.name === "dark");

  const handleClick = () => {
    toggleTheme();
    setDarkTheme(!DarkTheme);
  };

  return (
    <button className="button" onClick={handleClick}>
      <img
        src={DarkTheme ? sol : lua}
        alt={DarkTheme ? "Lua" : "Sol"}
        className="theme-icon"
      />
    </button>
  );
};

export { ThemeTogglerButton };
