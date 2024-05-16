import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const themes = {
  dark: {
    color: "#000000",
    background: "#05c2",
  },
  white: {
    color: "#ffffff",
    background: "#000",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
