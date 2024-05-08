import { useContext } from "react"
import { ThemePage, themes } from "../themesPages/themePage"
import { Button } from "../button/button";

export const ThemeTogglerButton = () =>{

    const { theme , setTheme } = useContext(ThemePage)

    
    return (
        <div>
                <Button onClick={() => setTheme(theme === themes.white ? themes.dark : themes.white)}>Clique aqui </Button>
        </div>
    )

}