import { useContext } from 'react';
import { ThemePage } from './../themesPages/themePage';


export const Button =(props) => {

    const { theme } = useContext(ThemePage)

        return(
        <button {...props} 
        style={{color: theme.color, backgroundColor: theme.background}}
        />
        )
}