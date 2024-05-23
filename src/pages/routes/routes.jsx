import { Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { PokemonDetails } from "../../components/infoPokemons/infoPokemon";
import { ThemeProvider } from "../../components/themesPages/themePage";




const AppRoutes = () => (
    <ThemeProvider>
        
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/infoPokemons/:pokemonId" element={<PokemonDetails />}
        />
        </Routes>
    </ThemeProvider>
    );

export { AppRoutes };
