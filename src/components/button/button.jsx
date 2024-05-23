import { useContext } from 'react';
import { ThemeContext } from '../themesPages/themePage';




export const Button =(props) => {
    
    const { theme } = useContext(ThemeContext);
    console.log('theme', theme);
        return(
        <button  {...props} 
            style={{ color: theme.color, backgroundColor: theme.background}}
        
        />
        )
    
}