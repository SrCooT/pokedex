
import  { createContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
    light: {
        name:'light',
        color: '#fff',
        background: "rgb(19,19,19,82)"
    },
    dark: {
        name: 'dark',
        color: '#000',
        background: "rgb(34,193,195)",
        
    }

};

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.name === 'light' ? themes.dark : themes.light));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };