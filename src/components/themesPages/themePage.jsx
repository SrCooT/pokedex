import { createContext, useState } from "react";
import { PropTypes } from 'prop-types';

export const themes = {
    dark: {
        color:'#000000',
        background: '#fff'
    },
    white: {
        color:'#ffffff',
        background: '#000000'
    }
};

export const ThemePage = createContext({});

export const ThemeProvider = (props) => {

    const [ theme, setTheme ]  = useState(themes.white)

    return(
        <ThemePage.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemePage.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired 
};