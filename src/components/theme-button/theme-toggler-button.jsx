import { useContext } from "react"
import { ThemeContext,  themes } from "./../themesPages/themePage"
import { Button } from "../button/button";

export const ThemeTogglerButton = () =>{

    const { theme , setTheme } = useContext(ThemeContext)

    
    return (
        <div>
                <Button onClick={() => {
                    console.log("Tema atual:", theme)
                    setTheme(theme === themes.white ? themes.dark : themes.white)}}>Clique aqui </Button>
                
        </div>
    )
}